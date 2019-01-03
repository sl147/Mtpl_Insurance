(function( $ ) {
	var vue_ins = new Vue({
		el: '#MTPLIC_vue',
		data: {
			MTPLIC_k1: 1,
			MTPLIC_k2: 1,
			MTPLIC_k3: 1,
			MTPLIC_k4: 1,
			MTPLIC_k5: 1,
			MTPLIC_k6: 1,
			MTPLIC_base: 180,
			MTPLIC_used: 1,
			MTPLIC_typeVechicle: [
				{ type: 'B1', name: 'до 1600 куб.см',                           value: 1,   },
				{ type: 'B2', name: 'від 1601 до 2000 куб.см',                  value: 1.14 },
				{ type: 'B3', name: 'від 2001 до 3000 куб.см',                  value: 1.18 },
				{ type: 'B4', name: '3001 куб.см і більше',                     value: 1.82 },
				{ type: 'A1', name: 'мотоцикли і моторолери до 300 см. куб',    value: 0.34 },
				{ type: 'A2', name: 'мотоцикли і моторолери понад 300 см. куб', value: 0.68 },
				{ type: 'C1', name: 'Вантажні а/м до 2т',                       value: 2.00 },
				{ type: 'C2', name: 'Вантажні а/м понад 2т',                    value: 2.18 },
				{ type: 'D1', name: 'Автобуси до 20 чол',                       value: 2.55 },
				{ type: 'D2', name: 'Автобуси понад 20 чол',                    value: 3.00 },
				{ type: 'F', name: 'Причепи до легкових автомобілів',           value: 0.34 },
				{ type: 'E', name: 'Причепи до вантажних автомобілів',          value: 0.50 },
			],
			MTPLIC_typeRegister: [
				{ name: 'менше 100 тис',          value: 1.50 },
				{ name: 'від 100 тис до 500 тис', value: 2.20 },
				{ name: 'від 500 тис до 1 млн',   value: 2.80 },
				{ name: 'понад 1 млн',            value: 3.40 },
				{ name: 'Бориспіль Ірпінь',       value: 2.50 },
				{ name: 'Київ',                   value: 4.80 },
				{ name: 'Іноземна реєстрація',    value: 3.00 },
			],
			MTPLIC_options_privilege: [
				{ text: 'без пільг',         value: 1   },
				{ text: 'пенсіонери',        value: 0.5 },
				{ text: 'інваліди ІІ групи', value: 0.5 },
				{ text: 'особи, які постраждали внаслідок Чорнобильської катастрофи', value:0.5 },
				{ text: 'учасники війни',    value: 0.5 }
			],
			MTPLIC_person: [1.5, 1.2, 1.5, 1.2],
			MTPLIC_taxi: [1, 1.3, 1.4, 1.5],
			MTPLIC_options_used: [
				{ text: 'фіз особа',       id: 1 },
				{ text: 'юр особа',        id: 2 },
				{ text: 'таксі фіз особа', id: 3 },
				{ text: 'таксі юр особа',  id: 4 },
			],
			MTPLIC_options_TD: [
				{ text: '12 місяців', value: 1,},
				{ text: '11 місяців', value: 0.95 },
				{ text: '10 місяців', value: 0.9 },
				{ text: '9 місяців',  value: 0.85 },
				{ text: '8 місяців',  value: 0.8 },
				{ text: '7 місяців',  value: 0.75 },
				{ text: '6 місяців',  value: 0.7 },
				{ text: '5 місяців',  value: 0.6 },
				{ text: '4 місяців',  value: 0.5 },
				{ text: '3 місяці',   value: 0.4 },
				{ text: '2 місяці',   value: 0.3 },
				{ text: '1 місяць',   value: 0.2 },
				{ text: '15 днів',    value: 0.1 },
			]
		},
		computed: {
			suma: function(){
				return (this.MTPLIC_base * this.MTPLIC_k1 * this.MTPLIC_k2 * this.MTPLIC_k3 * this.MTPLIC_k4 * this.MTPLIC_k5 * this.MTPLIC_k6).toFixed(2)
			}			
		},
		watch: {
			MTPLIC_used: function() {
				this.MTPLIC_k3 = this.MTPLIC_taxi  [this.MTPLIC_used - 1]
				this.MTPLIC_k4 = this.MTPLIC_person[this.MTPLIC_used - 1]
			}	
		},
		created: function() {
			this.MTPLIC_k1 = this.MTPLIC_typeVechicle[0].value
			this.MTPLIC_k2 = this.MTPLIC_typeRegister[0].value
			this.MTPLIC_k3 = this.MTPLIC_taxi[0]
			this.MTPLIC_k4 = this.MTPLIC_person[0]
			this.MTPLIC_k5 = this.MTPLIC_options_TD[0].value
			this.MTPLIC_k6 = this.MTPLIC_options_privilege[0].value
		}
})
})( jQuery )