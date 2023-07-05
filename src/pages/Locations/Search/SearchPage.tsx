import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import { IconButton, Input, Typography } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { StyledSearchPage } from './SearchPage.styled';

import debounce from 'lodash.debounce';
import { ChangeEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearchResults } from '../../../Redux/Slices/SessionSlice/SessionSlice';
import { ISearchResult } from '../../../Redux/Slices/SessionSlice/types';
import { selectSessionSearchResults } from '../../../Redux/selectors';
import { colors, lightTextColors } from '../../../utility/Themes/variables';
import { useSearchLocations } from '../../../utility/hooks/useGetWeather';

type TSearchResults = ISearchResult[] | [];
export const SearchPage = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const searchResults: TSearchResults = useSelector(selectSessionSearchResults);
  const handleGoBack = () => {
    navigation(-1);
  };
  useEffect(() => {
    console.log({ searchResults });
  }, [searchResults]);
  const debouncedSearch = debounce(async query => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const results = await useSearchLocations(query);

    return results ? results : [];
  }, 1000);
  const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const results = await debouncedSearch(value);
    dispatch(updateSearchResults(results));
  };
  return (
    <StyledSearchPage>
      <Input
        placeholder="Search location..."
        sx={{
          color: lightTextColors.text1,
          width: '80%',
          margin: '0 0 0 auto',
        }}
        onChange={handleSearch}
      />
      <IconButton
        aria-label="go back"
        onClick={handleGoBack}
        className="button button--go-back"
      >
        <KeyboardBackspaceRoundedIcon
          className="go-back__icon"
          fontSize="large"
          sx={{ color: colors.primary }}
        />
      </IconButton>

      <ul>
        {searchResults &&
          searchResults.map(result => {
            return (
              <li key={result.url}>
                <Typography variant="h4">{result.name}</Typography>
                <Typography variant="subtitle2">
                  {result.country}
                </Typography>{' '}
                <Typography variant="caption">{result.region}</Typography>
              </li>
            );
          })}
      </ul>
    </StyledSearchPage>
  );
};
