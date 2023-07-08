import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import {
  CircularProgress,
  IconButton,
  Input,
  ListItemButton,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { StyledSearchPage } from './SearchPage.styled';

import Typography from '@mui/material/Typography/Typography';
import debounce from 'lodash.debounce';
import { ChangeEvent, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  addLocation,
  updateSearchQuery,
} from '../../../Redux/Slices/SessionSlice/SessionSlice';
import { updateSearchResults } from '../../../Redux/Slices/SessionSlice/operations';
import {
  selectSessionIsLoading,
  selectSessionSearchQuery,
  selectSessionSearchResults,
} from '../../../Redux/selectors';
import { colors, lightTextColors } from '../../../utility/Themes/variables';
import { useAppDispatch } from '../../../utility/hooks/hooks';

export const SearchPage = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const searchQuery = useSelector(selectSessionSearchQuery);
  const isLoading = useSelector(selectSessionIsLoading);
  const searchResults = useSelector(selectSessionSearchResults);
  const searchResultsExists = searchResults?.length > 0;
  useEffect(() => {
    dispatch(updateSearchResults(searchQuery));
  }, [dispatch, searchQuery]);

  const handleGoBack = () => {
    navigation(-1);
  };

  const searchLocations = async (query: string) =>
    dispatch(updateSearchQuery(query));

  const debouncedSearchLocations = debounce(searchLocations, 500);

  const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    debouncedSearchLocations(value);
  };

  const handleAdding = (e: React.MouseEvent<HTMLLIElement>) => {
    const itemUrl = e.currentTarget.dataset['url'];
    dispatch(addLocation(itemUrl));
    dispatch(updateSearchQuery(''));
    navigation('/locations');
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

      <ul className="results">
        {isLoading ? (
          <CircularProgress className="results__loading" />
        ) : searchResultsExists ? (
          searchResults.map((result, index: number) => {
            const { url, name, region, country } = result;
            const shortRegion = region.slice(0, region.indexOf(','));
            return (
              <li
                key={index}
                className="results__item"
                onClick={handleAdding}
                data-url={url}
              >
                <ListItemButton className="results__item__button">
                  <Typography variant="h6" className="results__item__city">
                    {name}
                  </Typography>
                  <Typography
                    variant="caption"
                    className="results__item__country-region"
                  >
                    {region && `${shortRegion}, `}
                    {country}
                  </Typography>
                </ListItemButton>
              </li>
            );
          })
        ) : (
          <li className="results__empty">
            <Typography variant="subtitle1" className="results__empty__text">
              Nothing to display.
            </Typography>
            <Typography variant="caption" className="results__empty__info">
              <i>
                You can search by Pass US Zip code UK Postcode, Canada Postal
                code, IP address, Latitude/Longitude (decimal degree) or city
                name.
              </i>
            </Typography>
          </li>
        )}
      </ul>
    </StyledSearchPage>
  );
};
