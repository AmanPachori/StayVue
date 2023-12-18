import getCurrentUser from "./actions/getCurrentUser";
import getListings, { IListingsParams } from "./actions/getListings";
import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import Coursel from "./components/atoms/Slider/Slider";

import FaqPage from "./components/molecules/Pages/FaqPage";
import HomePage from "./components/molecules/Pages/HomePage";
import ListingCard from "./components/molecules/listings/ListingCard";

const Home = async ({}) => {
  const currentUser = await getCurrentUser();
  const listings = await getListings({ userId: undefined });

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <div className="">
          <div className="sm:py-5 h-[50vh]">
            <HomePage />
          </div>
          <div className="">
            <p className="text-2xl font-black text-primary">Best Choices</p>
            <p className="text-lg font-bold text-black">Popular Residencies</p>
          </div>
          <div className="w-full flex justify-center mt-5 items-center">
            <Coursel showDots autoPlay>
              {listings.map((listing: any) => (
                <ListingCard
                  currentUser={currentUser}
                  key={listing.id}
                  data={listing}
                />
              ))}
            </Coursel>
          </div>
          <div className="sm:py-1 h-[80vh]">
            <FaqPage />
          </div>
        </div>
      </Container>
    </ClientOnly>
  );
};

export default Home;
