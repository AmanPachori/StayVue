import getCurrentUser from "./actions/getCurrentUser";
import getListings, { IListingsParams } from "./actions/getListings";
import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import Coursel from "./components/atoms/Slider/Slider";

import FaqPage from "./components/molecules/Pages/FaqPage";
import Key from "./components/molecules/Pages/Key";
import HomePage from "./components/molecules/Pages/HomePage";
import ListingCard from "./components/molecules/listings/ListingCard";
import Partners from "./components/molecules/partners/Partners";
import NewsLater from "./components/molecules/Pages/NewsLater";

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
          <div className="sm:py-5 h-[70vh]">
            <HomePage />
          </div>
          <div className="h-[10vh] my-5">
            <Partners />
          </div>
          <div className="my-2 flex justify-between">
            <div>
              <p className="text-lg tracking-widest font-normal text-primary">
                TOP DESTINATION
              </p>
              <p className="text-2xl tracking-wider font-bold text-black">
                Explore Top Destinations
              </p>
            </div>
            <div className="arrow">
              <div className="arrow"></div>
              <div className="arrow"></div>
            </div>
          </div>
          <div className="w-full flex justify-center my-5 items-center">
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
          {/* <div className="sm:py-1 h-[80vh]">
            <FaqPage />
          </div> */}
          <div className="mt-[80px]">
            <p className="text-lg tracking-widest font-normal text-primary">
              Key Features
            </p>
            <p className="text-2xl tracking-wider font-bold text-black">
              We offer best services
            </p>
          </div>
          <div>
            <Key />
          </div>
          <div className="mt-[80px]">
            <NewsLater />
          </div>
        </div>
      </Container>
    </ClientOnly>
  );
};

export default Home;
