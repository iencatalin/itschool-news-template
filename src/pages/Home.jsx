import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getNewsList } from "../api/adaptors";
import { getNewsCategoriesEndpoint } from "../api/endpoints";
import Layout from "../components/Layout";
import { useFetch } from "../utils/hooks/useFetch";
import NewsCardsList from "../components/NewsCardsList";

const Home = () => {
  const technologyNewsEndpoint = getNewsCategoriesEndpoint("technology", 1, 6);
  const footballNewsEndpoint = getNewsCategoriesEndpoint("football", 1, 6);
  // Generam endpoint-ul categoriei fashion.
  const fashionNewsEndpoint = getNewsCategoriesEndpoint("fashion", 1, 6);
  let technologyData = useFetch(technologyNewsEndpoint);
  let footballData = useFetch(footballNewsEndpoint);
  // Fetch-uim datele categoriei fashion.
  let fashionData = useFetch(fashionNewsEndpoint);

  const adaptedTechnologyData = getNewsList(technologyData);
  const adaptedFootballData = getNewsList(footballData);
  // Adaptam datele categoriei fashion.
  const adaptedFashionData = getNewsList(fashionData);

  return (
    <Layout>
      <section className='tech my-5'>
        <Container>
          <h1 className='mb-5 pt-3'>Tech</h1>
          <NewsCardsList news={adaptedTechnologyData} />
          <p>
            Vezi toate știrile legate de tehnologie în secțiunea{" "}
            <Link to='/category/technology' className='text-secondary'>
              Tech
            </Link>
            .
          </p>
        </Container>
      </section>
      <section className='football my-5'>
        <Container>
          <h1 className='mb-5 pt-3'>Fotbal</h1>
          <NewsCardsList news={adaptedFootballData} />
          <p>
            Vezi toate știrile legate de fotbal în secțiunea{" "}
            <Link to='/category/football' className='text-secondary'>
              Fotbal
            </Link>
            .
          </p>
        </Container>
      </section>
     
      <section className='fashion my-5'>
        <Container>
          <h1 className='mb-5 pt-3'>Fashion</h1>
          <NewsCardsList news={adaptedFashionData} />
          <p>
            Vezi toate știrile legate de fashion în secțiunea{" "}
            <Link to='/category/fashion' className='text-secondary'>
              Fashion
            </Link>
            .
          </p>
        </Container>
      </section>
      <section className='favorites my-5'>
        <Container>
          <h1 className='mb-5 pt-3'>Favorite</h1>
          <p>
            Vrei să îți salvezi știrile favorite pentru a le reciti mai încolo?
          </p>
          <p>
            În cadrul fiecărei știri găsești un buton prin care poți adăuga
            știrea la favorite.
          </p>
          <p className='pb-3'>
            Vizitează secțiunea{" "}
            <Link to='/favorites' className='text-secondary'>
              Favorite
            </Link>{" "}
            pentru a vedea știrile adăugate.
          </p>
        </Container>
      </section>
    </Layout>
  );
};

export default Home;
