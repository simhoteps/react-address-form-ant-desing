import React, {useState } from "react";
import { DatePicker} from "antd";
import { cities } from "../data/cities";
import { Stack } from "@mui/material";
import { Form, Formik, FormikProps } from "formik";
import CustomSelect from "./inputs/Select";
import CustomInput from "./inputs/Input";
import Title from "./inputs/Title";
import { IAddressForm, IDistricts } from "types/types";
import { ValidationSchema } from "utils/validation/Validation";




const FormDisabledDemo: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [surname, setSurName] = useState<string>("");
  const [formattedPhone, setFormattedPhone] = useState<string>("");
  const [fullAddress, setAddress] = useState<string>("");
  const [addressName, setAddressName] = useState<string>("");
  const [selectCity, setSelectCity] = useState<string>("");
  const [selectDistrict, setSelectDistrict] = useState<string>("");
  const [selectNeighborhood, setSelectNeighborhood] = useState<string>("");
  const [allDistrict, setAllDistrict] = useState<IDistricts[]>([]);
  const [allNeighborhood, setAllNeighborhood] = useState<string[]>([]);

  const handleCityChange = (value: string) => {
    setSelectCity(value);
    setSelectDistrict("");
    setSelectNeighborhood("");
    const districts =
      value !== "" ? cities.find((k) => k.text === value)?.districts : [];
    districts && setAllDistrict(districts);
    districts && setSelectDistrict(districts[0].text);
  };

  const handleDistrictChange = (value: string) => {
    setSelectDistrict(value);
    setSelectNeighborhood("");
    const neighborhoods =
      value !== ""
        ? allDistrict?.find((d) => d.text === value)?.neighborhoods
        : [];
    neighborhoods && setAllNeighborhood(neighborhoods);
    neighborhoods && setSelectNeighborhood(neighborhoods[0]);
  };

  const handleNeighborhoodChange = (value: string) => {
    setSelectNeighborhood(value);
  };

  /* Phone  */


  const formatPhoneNumber = (value: string) => {
    const phoneNumber = value.replace(/[^\d]/g, "");
    let formatted = phoneNumber;

    // Numaranın uzunluğuna göre kontroller eklendi
    if (phoneNumber.length > 10) {
      formatted = `0(${phoneNumber.substring(1, 4)}) ${phoneNumber.substring(
        4,
        7
      )} ${phoneNumber.substring(7, 9)} ${phoneNumber.substring(9, 11)}`;
    } else if (phoneNumber.length > 7) {
      formatted = `0(${phoneNumber.substring(1, 4)}) ${phoneNumber.substring(
        4,
        7
      )} ${phoneNumber.substring(7)}`;
    } else if (phoneNumber.length > 4) {
      formatted = `0(${phoneNumber.substring(1, 4)}) ${phoneNumber.substring(
        4
      )}`;
    } else if (phoneNumber.length === 4) {
      formatted = `0(${phoneNumber.substring(1, 4)})`;
    } else if (phoneNumber.length === 1 && phoneNumber !== "0") {
      formatted = `0(${phoneNumber}`;
    }
    return formatted;
  };
  /* Phone */

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          surname: "",
          phone: "",
          city: "",
          district: "",
          neighborhood: "",
          fullAddress: "",
          addressName: "",
          date: "",
        }}
        validationSchema={ValidationSchema}
        onSubmit={(values: IAddressForm, actions) => {}}
      >
        {(props: FormikProps<IAddressForm>) => {
          const {
            values,
            touched,
            errors,
            dirty,
            handleBlur,
            handleChange,
            handleSubmit,
            setSubmitting,
          } = props;
          return (
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
                setSubmitting(false);
              }}
            >
              <Stack gap={"24px"}>
                <Stack direction={"row"} gap={"24px"} alignItems={"center"}>
                  <CustomInput
                    title={"Ad*"}
                    name={"name"}
                    placeholder={"Adınızı Giriniz"}
                    onChange={(event) => {
                      setName(event.target.value);
                      handleChange(event);
                    }}
                    onBlur={handleBlur}
                    value={name}
                    errors={errors.name}
                    touched={touched.name}
                    maxLength={25}
                  />
                  <CustomInput
                    title={"Soyad*"}
                    name={"surname"}
                    placeholder={"Soyadınızı Giriniz"}
                    onChange={(event) => {
                      setSurName(event.target.value);
                      handleChange(event);
                    }}
                    onBlur={handleBlur}
                    value={surname}
                    errors={errors.surname}
                    touched={touched.surname}
                    maxLength={25}
                  />
                </Stack>
                <Stack direction={"row"} gap={"24px"} alignItems={"center"}>
                  <CustomInput
                    title={"Telefon*"}
                    name={"phone"}
                    placeholder={"0(5**) *** ** **"}
                    onChange={(e) => {
                      setFormattedPhone(e.target.value);
                      handleChange(e);
                      console.log(e.target.value)
                    }}
                    onBlur={handleBlur}
                    value={formatPhoneNumber(formattedPhone)}
                    errors={errors.phone}
                    touched={touched.phone}
                    maxLength={16}
                  />
                  
                  <CustomSelect
                    title={"İl*"}
                    onChange={handleCityChange}
                    value={selectCity}
                    disabled={false}
                    values={cities.map((item) => item.text)}
                    errors={errors.city}
                    touched={touched.city}
                  />
                </Stack>
                <Stack direction={"row"} gap={"24px"} alignItems={"center"}>
                  <CustomSelect
                    title={"İlçe*"}
                    onChange={handleDistrictChange}
                    value={selectDistrict}
                    disabled={!selectCity}
                    values={allDistrict.map((item) => item.text)}
                    errors={errors.district}
                    touched={touched.district}
                  />
                  <CustomSelect
                    title={"Mahalle*"}
                    onChange={handleNeighborhoodChange}
                    value={selectNeighborhood}
                    disabled={!selectDistrict}
                    values={allNeighborhood}
                    errors={errors.neighborhood}
                    touched={touched.neighborhood}
                  />
                </Stack>
                <CustomInput
                  title={"Adres*"}
                  desc="Ekiplerin sorunsuz bir şekilde ulaşabilmesi için mahalle, cadde, sokak, bina gibi detay bilgileri eksiksiz girdiğinizden emin olun."
                  name={"fullAddress"}
                  placeholder="Cadde, mahalle sokak ve diğer bilgileri giriniz."
                  onChange={(e) => {
                    setAddress(e.target.value);
                    handleChange(e);
                  }}
                  onBlur={handleBlur}
                  value={fullAddress}
                  errors={errors.fullAddress}
                  touched={touched.fullAddress}
                  maxLength={250}
                />
                <CustomInput
                  title={"Adres Başlığı*"}
                  name={"addressName"}
                  placeholder="Adres Başlığı Giriniz"
                  onChange={(e) => {
                    setAddressName(e.target.value);
                    handleChange(e);
                  }}
                  onBlur={handleBlur}
                  value={addressName}
                  errors={errors.addressName}
                  touched={touched.addressName}
                  maxLength={250}
                />
                   <div>
                <Title title={"Lütfen Kurulum Tarihini Seçin"} />
                <DatePicker size="large" />
              </div>
              </Stack>
           
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormDisabledDemo;
