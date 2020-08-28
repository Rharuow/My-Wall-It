const icon = title => {
  let icon
  switch (title) {
    case "aluguel":
      icon = "fas fa-house-user"
    break;
    case "agua":
      icon = "fas fa-faucet"
    break;
    case "luz":
      icon = "fas fa-lightbulb"
    break;
    case "internet":
      icon = "fas fa-wifi"
    break;
    case "gas":
      icon = "fas fa-burn"
    break;
    case "compras":
      icon = "fas fa-shopping-cart"
    break;
    default:
      icon = "fas fa-hand-holding-usd"
    break;
  }

  return icon
}

export default icon