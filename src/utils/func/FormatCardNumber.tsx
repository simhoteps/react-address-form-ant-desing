export const formatCardNumber = (value: string) => {
    const cardNumber = value.replace(/[^\d]/g, "");
    const parts = [];
    for (let i = 0; i < cardNumber.length; i += 4) {
      parts.push(cardNumber.substring(i, i + 4));
    }
    return parts.join(" ");
  };