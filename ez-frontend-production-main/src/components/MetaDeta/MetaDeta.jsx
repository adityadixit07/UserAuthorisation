// import Favicon from "react-favicon";
import { Helmet, HelmetProvider } from "react-helmet-async";
// import FavIcon from "../../Assets/"

// eslint-disable-next-line react/prop-types
const MetaData = ({ title }) => {
  return (
    <>
      <HelmetProvider>
        <Helmet defaultTitle="eZ - The One App">
          <title>{title}</title>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/assets/ezFINALlogo.png"
            // href="https://res.cloudinary.com/ds6spmr71/image/upload/v1682998618/favicon/apple-touch-icon_x6bkwy.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/assets/ezFINALlogo.png"
            // href="https://res.cloudinary.com/ds6spmr71/image/upload/v1682998618/favicon/favicon-32x32_amnfpm.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/assets/ezFINALlogo.png"
            // href="https://res.cloudinary.com/ds6spmr71/image/upload/v1682998618/favicon/favicon-16x16_xvjtwo.png"
          />
          <link rel="manifest" href="/Meta-Assets/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/assets/ezFINALlogo.png"
            // href="https://res.cloudinary.com/ds6spmr71/raw/upload/v1683001984/favicon/manifest_xwgq0r_z3g3tn.json"
            color="#5bbad5"
          />
          <meta name="apple-mobile-web-app-title" content="eZ - The One App" />
          <meta name="application-name" content="eZ - The One App" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="theme-color" content="#ffffff"></meta>
        </Helmet>
      </HelmetProvider>
    </>
  );
};

export default MetaData;
