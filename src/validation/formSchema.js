import * as yup from "yup";

export default yup.object().shape({
  name: yup .string(),
  size: yup
    .string()
    .oneOf(['small', 'medium', 'large','xlarge'], 'Pizza size is required'),
  sauce: yup
    .string()
    .oneOf(['original-red', 'garlic-ranch', 'bbq-sauce', 'spinach-alfredo'], 'Sauce type is required'),
    specialInstructions: yup.string(),

    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    canadianBacon: yup.boolean(),
    spicyItalianSausage: yup.boolean(),
    grilledChicken: yup.boolean(),
    dicedTomatoes: yup.boolean(),
    blackOlives: yup.boolean(),
    roastedGarlic: yup.boolean(),
    artichokeHearts: yup.boolean(),
    threeCheese: yup.boolean(),
    pineapple: yup.boolean(),
    extraCheese: yup.boolean(),
    onions: yup.boolean(),
    greenPepper: yup.boolean(),
    sub: yup.boolean(),
    itemCount: yup
        .string()
        .oneOf(['1', '2', '3', '4', '5']),
  
  
});
