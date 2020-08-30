export const status = state => {
  switch (state) {
    case "paid":
      return "Pago"
    case "pending":
      return "Pendente"
    case "late":
      return "Atrasado"
  }
}

export const debtName = name => {
  switch (name) {
    case "rent":
      return "Aluguel"
    case "water":
      return "Água"
    case "energy":
      return "Luz"
    case "gas":
      return "Gás"
    case "internet":
      return "Internete"
    case "supermarket":
      return "Supermercado"
    case "orthers":
      return "Outros"
  }
}

export const icon = title => {
  switch (title) {
    case "aluguel":
      return "fas fa-house-user"
    case "agua":
      return "fas fa-faucet"
    case "luz":
      return "fas fa-lightbulb"
    case "internet":
      return "fas fa-wifi"
    case "gas":
      return "fas fa-burn"
    case "compras":
      return "fas fa-shopping-cart"
    default:
      return "fas fa-hand-holding-usd"
  }
}