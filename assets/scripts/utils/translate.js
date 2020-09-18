export const getStatus = state => {
  switch (state) {
    case "paid":
      return "Pago"
    case "pending":
      return "Pendente"
    case "late":
      return "Atrasado"
    case "activate":
      return "Ativo"
    case "deactivated":
      return "Desativado"
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
    case "rent":
      return "fas fa-house-user"
    case "water":
      return "fas fa-faucet"
    case "energy":
      return "fas fa-lightbulb"
    case "internet":
      return "fas fa-wifi"
    case "gas":
      return "fas fa-burn"
    case "supermarket":
      return "fas fa-shopping-cart"
    case "new debt":
      return "fas fa-receipt"
    default:
      return "fas fa-hand-holding-usd"
  }
}

export const borderColor = kind => {
  switch (kind) {
    case "paid":
      return "success"
    case "pending":
      return "warning"
    case "late":
      return "danger"
    default:
      return "default"
  }
}

export const getMoneyValue = string => parseFloat(string.replace(/,/g, "."))