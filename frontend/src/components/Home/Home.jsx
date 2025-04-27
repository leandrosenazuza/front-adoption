import { useEffect } from 'react';
import Categories from '../Layouts/Categories';
import Banner from './Banner/Banner';
import DealSlider from './DealSlider/DealSlider';
import ProductSlider from './ProductSlider/ProductSlider';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, getSliderProducts } from '../../actions/productAction';
import { useSnackbar } from 'notistack';
import MetaData from '../Layouts/MetaData';

const Home = () => {

  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const { error, loading } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
      dispatch(clearErrors());
    }
    dispatch(getSliderProducts());
  }, [dispatch, error, enqueueSnackbar]);

  return (
    <>
      <MetaData title="Adoção de Pets - Pata Amada" />
      <Categories />
      <main className="flex flex-col gap-3 px-2 mt-16 sm:mt-2">
        <Banner />
        <DealSlider title={"Pets em destaque"} />
        {!loading && <ProductSlider title={"Sugestões para você"} tagline={"Baseado nas suas atividades"} />}
        <DealSlider title={"Conheça nossos doguinhos"} />
        {!loading && <ProductSlider title={"Você pode gostar também..."} tagline={"Basedo nos seus interesses"} />}
        <DealSlider title={"Conheça nossos gatinhos"} />
        {!loading && <ProductSlider title={"Você não pode perder"} tagline={"Inspirado nas suas adoções"} />}
      </main>
    </>
  );
};

export default Home;
