import CardCatelog from "../CardCatelog/CardCatelog";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import ProductCategories from "../ProductCategories/ProductCategories";

const Home = () => {
    return (
        <div>
            <CardCatelog></CardCatelog>
            <FeaturedProducts></FeaturedProducts>
            <ProductCategories></ProductCategories>
        </div>
    );
};

export default Home;