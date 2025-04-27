import PetsIcon from '@mui/icons-material/Pets';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import RiceBowlIcon from '@mui/icons-material/RiceBowl';
import GroupsIcon from '@mui/icons-material/Groups';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';


const SecondaryDropDownMenu = () => {

    const navs = [
        {
            title: "Doe um pet",
            icon: <PetsIcon sx={{ fontSize: "18px" }} />,
            redirect: "https://www.mykart.com/communication-preferences/push",
        },
        {
            title: "Doação em dinheiro",
            icon: <MonetizationOnIcon sx={{ fontSize: "18px" }} />,
            redirect: "https://seller.mykart.com/sell-online",
        },
        {
            title: "Doação de alimentos e materiais",
            icon: <RiceBowlIcon sx={{ fontSize: "18px" }} />,
            redirect: "https://www.mykart.com/helpcentre",
        },
        {
            title: "Parceiros",
            icon: <GroupsIcon sx={{ fontSize: "18px" }} />,
            redirect: "https://advertising.mykart.com",
        },
        {
            title: "Anuncie no site",
            icon: <PriceCheckIcon sx={{ fontSize: "18px" }} />,
            redirect: "https://www.mykart.com/mobile-apps",
        },
    ]

    return (
        <div className="absolute w-60 -right-2 top-9 bg-white shadow-2xl rounded flex-col text-sm">

            {navs.map((item, i) => {

                const { title, icon, redirect } = item;

                return (
                    <a className="pl-3 py-3.5 border-b flex gap-3 items-center hover:bg-gray-50 rounded-t" href={redirect} key={i}>
                        <span className="text-primary-blue">{icon}</span>
                        {title}
                    </a>
                )
            })}

            <div className="absolute right-1/2 -top-2.5">
                <div className="arrow_down"></div>
            </div>
        </div>
    );
};

export default SecondaryDropDownMenu;
