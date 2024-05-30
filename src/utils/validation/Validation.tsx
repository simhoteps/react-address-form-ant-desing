import * as Yup from "yup";

export const ValidationSchema = Yup.object().shape({
  name: Yup.string().required("İsim zorunludur"),
  surname: Yup.string().required("Soyisim zorunludur"),
  phone: Yup.string().required("Telefon numarası zorunludur"),
  city: Yup.string().required("Zorunlu alan"),
  district: Yup.string().required("Zorunlu alan"),
  neighborhood: Yup.string().required("Zorunlu alan"),
  fullAddress: Yup.string().required("Zorunlu alan"),
  addressName: Yup.string().required("Zorunlu alan"),
  date: Yup.string().required("Zorunlu alan"),
});
