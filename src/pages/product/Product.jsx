// lib
import {
  ClockIcon,
  Cog6ToothIcon,
  CurrencyDollarIcon,
  GlobeAltIcon,
  HomeIcon,
  LightBulbIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import PropTypes from "prop-types";

// components
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import useProduct from "../../hooks/useProduct";
import Spinner from "../../components/spinner/Spinner";
import ErrorModal from "../../components/errorModal/ErrorModal";
import Button from "../../components/button/Button";

const PRODUCT_ID = 6781;

const Product = () => {
  const { product, hasError } = useProduct(PRODUCT_ID);

  const navigate = useNavigate();

  const breadcrumbItems = useMemo(
    () => [
      { label: <HomeIcon className="w-[20px]" />, url: "/" },
      { label: "Offers", url: "/" },
      { label: product?.name ?? "", url: "" },
    ],
    [product]
  );

  const handleEditClick = () => {
    navigate("/product/edit");
  };

  if (hasError) return <ErrorModal />;

  return (
    <div className="flex flex-1 py-6 px-2 xl:px-0 gap-4 flex-col">
      {!product ? (
        <Spinner />
      ) : (
        <>
          <div className="flex items-center flex-wrap justify-between gap-2">
            <Breadcrumb items={breadcrumbItems} />
            {/* Edit */}
            <Button label="Edit" onClick={handleEditClick} />
          </div>
          <div className="flex flex-col md:flex-row rounded-md border bg-white border-gray-300/80">
            <div className="flex gap-2 md:basis-2/3 flex-col border-gray-300/80 md:border-r">
              <div className="relative w-full flex h-[200px]">
                <img src={product?.picture} className="object-contain mx-auto" />
                <div className="absolute top-0 left-0 flex">
                  <div className="p-2 bg-primary text-white border rounded-tl-md rounded-br-md border-l-0 border-t-0">
                    <LightBulbIcon className="w-[19px]" />
                  </div>
                  <p className="h-full p-2 leading-[normal] border border-t-0 border-l-0 rounded-br-md">Patent</p>
                </div>
              </div>
              <div className="flex p-6 flex-col gap-2">
                <div className="font-semibold">
                  <p>{product?.name}</p>
                </div>
                <div className="">
                  <p dangerouslySetInnerHTML={{ __html: product?.description }} />
                </div>
              </div>
            </div>
            <div className="flex p-6 md:basis-1/3 flex-col gap-6">
              <p className="text-[18px] font-medium">Offered By</p>
              {/* personal details */}
              <div className="flex flex-col gap-2">
                <img src={product?.company?.logo} className="w-full md:w-[200px]" />
                <div className="flex items-center mb-6">
                  <img className="w-14 h-14 lg:h-16 lg:w-16 rounded-full mr-4" src={product?.user?.profilePicture} alt="User Profile" />
                  <div>
                    <p className="text-lg font-medium">{`${product?.user?.firstName}${
                      product?.user?.lastName ? " " + product?.user?.lastName : ""
                    }`}</p>
                    <p className="text-[14px] font-light">{product?.user?.position}</p>
                  </div>
                </div>
              </div>
              {/* company address */}
              <div>
                <div className="flex items-center">
                  <MapPinIcon className="w-[20px]" />
                  <p className="text-[15px] font-light">{product?.company?.address?.street}</p>
                </div>
                <p className="text-[15px] font-light">{`${product?.company?.address?.zipCode} ${product?.company?.address?.city?.name}, ${product?.company?.address?.country?.name}`}</p>
                {/* map */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2522.776196325529!2d6.100361100000001!3d50.779722199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTDCsDQ2JzQ3LjAiTiA2wrAwNicwMS4zIkU!5e0!3m2!1sen!2sin!4v1691786124879!5m2!1sen!2sin"
                  //  height={200}
                  width={"100%"}
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="mt-4 aspect-[16/9] md:w-full"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-6 gap-4 rounded-md border bg-white border-gray-300/80">
            <p className="font-medium">Video</p>
            <div className="flex w-full aspect-[16/9] md:w-[600px] md:h-[340px] mx-auto justify-center">
              <ReactPlayer className="react-player" url={product?.video} width="100%" height="100%" controls />
            </div>
          </div>
          <div className="flex flex-col rounded-md p-6 gap-4 border bg-white border-gray-300/80">
            <p className="font-medium">Offer details</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#6B7280]">
              <OfferGridItem label="Technology" icon={Cog6ToothIcon} chips={product?.categories.map((category) => category?.name)} />
              <OfferGridItem label="Business Model" icon={GlobeAltIcon} chips={product?.businessModels.map((model) => model?.name)} />

              <OfferGridItem label="TRL" icon={ClockIcon} chips={[product?.trl?.name]} />

              <OfferGridItem label="Costs" icon={CurrencyDollarIcon} chips={[product?.investmentEffort]} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const OfferGridItem = ({ chips, label, icon: Icon }) => (
  <div className="flex flex-col gap-2">
    <div className="flex gap-2">
      <Icon className="w-[24px]" />
      <p className="font-light">{label}</p>
    </div>
    <div className="flex flex-wrap text-[14px] gap-1 ml-8">
      {chips.map((chip) => (
        <div key={chip} className="flex rounded-2xl px-3 py-1 bg-[#e5e7eb]">
          {chip}
        </div>
      ))}
    </div>
  </div>
);

OfferGridItem.propTypes = {
  chips: PropTypes.array,
  label: PropTypes.string,
  icon: PropTypes.elementType,
};

export default Product;
