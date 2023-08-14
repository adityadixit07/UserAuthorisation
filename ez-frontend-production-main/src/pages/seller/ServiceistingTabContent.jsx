import Consultation from './ServiceListing/ServiceForm/Consultation'
import Products from './ServiceListing/ServiceForm/Products'
import Service from "./ServiceListing/ServiceForm/Service"
import Workshop from './ServiceListing/ServiceForm/Workshop'
import ServiceModal from './ServiceListing/ServiceModal';
import { useSelector } from "react-redux";
import Loading from '../../components/Loader/Loader'

function ServiceistingTabContent({ serviceTab, user, setOpenComingSoon }) {
    const { catalogueCreationMsg, isLoading } = useSelector((state) => state.seller);

    const ServiceTab = [
        {
            id: 0,
            form: <Consultation user={user} />
        },
        {
            id: 1,
            form: <Service user={user} setOpenComingSoon={setOpenComingSoon} />
        },
        {
            id: 2,
            form: <Products user={user} />
        },
        {
            id: 3,
            form: <Workshop user={user} />
        },
    ];

    return (
        <div style={{border:"none !important"}}>
            {ServiceTab.map((data) => (
                <div key={data.id}>
                    {serviceTab === data.id ? data.form : ""}
                    {isLoading && <Loading />}
                    {catalogueCreationMsg.success && <ServiceModal />}
                </div>
            ))}
        </div>
    )
}

export default ServiceistingTabContent
