namespace businessITAPI.Models
{
    public class Cliente
    {
        public int Id { get; set; }
        public string NombreCliente { get; set; } = string.Empty;
        public string Correo { get; set; } = string.Empty;
    }
}