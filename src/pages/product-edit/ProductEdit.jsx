// lib
import {
  CheckIcon,
  ClockIcon,
  Cog6ToothIcon,
  CurrencyDollarIcon,
  GlobeAltIcon,
  LightBulbIcon,
  MapPinIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useForm, Controller } from "react-hook-form";
import ReactQuill from "react-quill";

// components
import useProduct from "../../hooks/useProduct";
import Spinner from "../../components/spinner/Spinner";
import ErrorModal from "../../components/errorModal/ErrorModal";
import Button from "../../components/button/Button";
import ChipsInput from "../../components/chipsInput/ChipsInput";

// utils
import "react-quill/dist/quill.snow.css";
import Select from "../../components/select/Select";

const PRODUCT_ID = 6781;

const ProductEdit = () => {
  const { product, hasError, updateProduct, trlOptions } = useProduct(PRODUCT_ID);

  const navigate = useNavigate();

  const handleViewOfferClick = () => {
    navigate("/product");
  };

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    register,
    control,
  } = useForm({
    mode: "all",
    values: {
      name: product?.name ?? "",
      description: product?.description ?? "",
      categories: product?.categories?.map((category) => category.name) ?? [],
      businessModels: product?.businessModels?.map((model) => model.name) ?? [],
      trl: product?.trl?.id ?? "",
      investmentEffort: product?.investmentEffort ?? "",
      video: product?.video ?? "",
    },
  });

  const handleFormCancel = () => {
    navigate("/product");
  };

  const onSubmit = (data) => updateProduct({ ...(product ?? {}), ...data });

  if (hasError) return <ErrorModal />;

  return (
    <div className="flex flex-1 flex-col">
      {!product ? (
        <Spinner />
      ) : (
        <form className="flex flex-1 py-6 px-2 xl:px-0 gap-4 flex-col" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center flex-wrap justify-between gap-2">
            <p className="font-medium">{product?.name}</p>
            {/* View Offer */}
            <Button label="View Offer" onClick={handleViewOfferClick} />
          </div>
          <div className="flex flex-col md:flex-row rounded-md border bg-white border-gray-300/80">
            <div className="flex gap-2 md:basis-2/3 flex-col border-gray-300/80 md:border-r">
              <div className="relative w-full flex h-[200px]">
                <img src={product?.picture} className="object-contain mx-auto" />
                <div className="absolute top-0 left-0 flex">
                  <div className="p-2 bg-primary text-white border rounded-tl-md rounded-br-md border-l-0 border-t-0">
                    <LightBulbIcon className="w-[19px]" />
                  </div>
                  <p className=" flex gap-2 items-center h-full p-2 leading-[normal] border border-t-0 border-l-0 rounded-br-md">
                    Patent
                    <PencilIcon className="w-[18px] " />
                  </p>
                </div>
                <div className="absolute top-0 right-0 flex p-2 bg-white border rounded-bl-md border-r-0 border-t-0">
                  <PencilIcon className="w-[18px]" />
                </div>
              </div>
              <div className="flex p-6 flex-col gap-2">
                {/* Product name input */}
                <div className="gap-2 flex flex-col">
                  <input
                    placeholder="Product name"
                    className="w-full border h-[40px] px-2 border-gray-300/80 rounded-md focus:outline-none focus:border-primary"
                    {...register("name", { required: true })}
                  />

                  {errors.name?.type === "required" && (
                    <p className="flex text-red-600 text-sm" role="alert">
                      Product name is required
                    </p>
                  )}
                </div>
                {/* Product description rich text editor */}
                <Controller
                  name="description"
                  control={control}
                  rules={{
                    required: "Description is required",
                  }}
                  render={({ field }) => (
                    <>
                      <ReactQuill
                        className="border border-gray-300/80 focus-within:outline-none focus-within:border-primary rounded-md custom-quill-container"
                        {...field}
                      />
                      {(errors.description || field.value?.trim() === "<p><br></p>") && (
                        <p className="flex text-red-600 text-sm" role="alert">
                          Product description is required
                        </p>
                      )}
                    </>
                  )}
                />
                {/* Form actions */}
                <div className="mt-2 flex items-center justify-end gap-3">
                  <p className={`cursor-pointer text-primary ${isSubmitting && 'pointer-events-none opacity-50'}`} onClick={isSubmitting ? undefined : handleFormCancel}>
                    Cancel
                  </p>
                  <Button
                    type="submit"
                    icon={isSubmitting ? <Spinner size={4} fullscreen={false} color="white" /> : <CheckIcon className="w-[18px]" />}
                    label={isSubmitting ? "Saving..." : "Save"}
                    disabled={isSubmitting}
                  />
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
              </div>
            </div>
          </div>
          <div className="flex flex-col p-6 gap-4 rounded-md border bg-white border-gray-300/80">
            <p className="font-medium">Video</p>
            <input
              placeholder="Add a youtube or vimeo link"
              className="border h-[40px] px-2 border-gray-300/80 rounded-md focus:outline-none focus:border-primary"
              {...register("video", { required: false })}
            />
          </div>
          <div className="flex flex-col rounded-md p-6 gap-4 border bg-white border-gray-300/80">
            <p className="font-medium">Offer details</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#6B7280]">
              <OfferGridItem label="Technology" icon={Cog6ToothIcon}>
                <Controller
                  name="categories"
                  control={control}
                  rules={{
                    required: "Categories are required",
                  }}
                  render={({ field }) => (
                    <>
                      <ChipsInput {...field} />
                      {errors.categories && (
                        <p className="flex text-red-600 text-sm" role="alert">
                          Product technologies are required
                        </p>
                      )}
                    </>
                  )}
                />
              </OfferGridItem>
              <OfferGridItem label="Business Model" icon={GlobeAltIcon}>
                <Controller
                  name="businessModels"
                  control={control}
                  rules={{
                    required: "Business models are required",
                  }}
                  render={({ field }) => (
                    <>
                      <ChipsInput {...field} />
                      {errors.businessModels && (
                        <p className="flex text-red-600 text-sm" role="alert">
                          Product business model(s) are required
                        </p>
                      )}
                    </>
                  )}
                />
              </OfferGridItem>
              <OfferGridItem label="TRL" icon={ClockIcon}>
                <Controller
                  name="trl"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field }) => (
                    <>
                      <Select options={trlOptions ?? []} {...field} />
                      {errors.trl && (
                        <p className="flex text-red-600 text-sm" role="alert">
                          Product TRL are required
                        </p>
                      )}
                    </>
                  )}
                />
              </OfferGridItem>
              <OfferGridItem label="Costs" icon={CurrencyDollarIcon}>
                <input
                  className="border h-[40px] px-2 border-gray-300/80 rounded-md focus:outline-none focus:border-primary"
                  {...register("investmentEffort", { required: true })}
                />
                {errors.investmentEffort && (
                  <p className="flex text-red-600 text-sm" role="alert">
                    Product cost is required
                  </p>
                )}
              </OfferGridItem>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

const OfferGridItem = ({ label, icon: Icon, children }) => (
  <div className="flex flex-col gap-2">
    <div className="flex gap-2">
      <Icon className="w-[24px]" />
      <p className="font-light">{label}</p>
    </div>
    <div className="flex gap-1 ml-8 flex-col text-[#374151]">{children}</div>
  </div>
);

OfferGridItem.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.elementType,
  children: PropTypes.node,
};

export default ProductEdit;
