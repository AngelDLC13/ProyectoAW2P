document.addEventListener('DOMContentLoaded', function () {
    new Vue({
        el: '#reservaForm',
        data: {
            nuevaReserva: {
                fecha: '',
                horarios: []
            },
            horarios: [
                "07:00-08:00", "08:00-09:00", "09:00-10:00", "10:00-11:00",
                "11:00-12:00", "12:00-13:00", "13:00-14:00", "14:00-15:00",
                "15:00-16:00", "16:00-17:00", "17:00-18:00", "18:00-19:00",
                "19:00-20:00"
            ],
            successMessage: false,
            errorMessage: false
        },
        methods: {
            guardarReserva: function() {
                if (this.nuevaReserva.fecha && this.nuevaReserva.horarios.length > 0) {
                    var reservas = JSON.parse(localStorage.getItem('reservas')) || [];
                    reservas.push({
                        laboratorio: 'Lab 101', // Cambiar según sea necesario
                        fecha: this.nuevaReserva.fecha,
                        horarios: this.nuevaReserva.horarios,
                        ocupante: 'Usuario'
                    });
                    localStorage.setItem('reservas', JSON.stringify(reservas));

                    this.successMessage = true;
                    this.errorMessage = false;

                    setTimeout(() => {
                        var modal = document.getElementById("myModal");
                        modal.style.display = "none";
                        this.successMessage = false;
                    }, 2000);
                } else {
                    this.errorMessage = true;
                    this.successMessage = false;
                }
            }
        }
    });
});
