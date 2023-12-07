import getCurrentUser from "./actions/getCurrentUser";
import getListings, { IListingsParams } from "./actions/getListings";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import Coursel from "./components/atoms/Slider/Slider";
import Accordian from "./components/atoms/accordion/Accordian";
import Quess from "./components/atoms/accordion/Questions";
import FaqPage from "./components/molecules/Pages/FaqPage";
import HomePage from "./components/molecules/Pages/HomePage";
import ListingCard from "./components/molecules/listings/ListingCard";

interface HomeProps {
  searchParams: IListingsParams;
}

const Home = async ({ searchParams }: HomeProps) => {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return <EmptyState showReset />;
  }

  return (
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
  );
};

export default Home;
