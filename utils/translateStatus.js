const status = state => {
  switch (state) {
    case "paid":
      return "Pago"
    case "pending":
      return "Pendente"
    case "late":
      return "Atrasado"
  }
}

export default status