import EmptyState from "../components/EmptyState";
import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoritesListings";
import FavouritesClient from "./FavouritesClient";

const page = async () => {
  const currentUser = await getCurrentUser();
  const listings = await getFavoriteListings();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please Login" />;
  }

  if (listings.length === 0) {
    return (
      <EmptyState
        title="No Favourites Found"
        subtitle="Looks like you have no favorite Listing"
      />
    );
  }

  return (
    <>
      <FavouritesClient listings={listings} currentUser={currentUser} />
    </>
  );
};

export default page;
