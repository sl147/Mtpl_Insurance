<?php

/**
 * Provide a public-facing view for the plugin
 *
 * This file is used to markup the public-facing aspects of the plugin.
 *
 * @link       https://www.artargus.in.ua/insurancePlugin
 * @since      1.0.0
 *
 * @package    Mtpl_Insurance
 * @subpackage Mtpl_Insurance/public/partials
 */
?>

<div id="MTPLIC_vue">
	<div v-cloak class='MTPLIC_form'>
		<div class="MTPLIC_title">КАЛЬКУЛЯТОР АВТОЦИВІЛКИ</div>
		<span>Тип транспортного засобу</span><br>
		<select v-model="MTPLIC_k1">
			<option v-for="option in MTPLIC_typeVechicle" :value="option.value">
				{{ option.type }} {{ option.name }}
			</option>
		</select><br><br>

		<span>Місце реєстрації транспортного засобу</span><br>
		<span>Населені пункти з населенням</span><br>
		<select v-model="MTPLIC_k2">
			<option v-for="option in MTPLIC_typeRegister" :value="option.value">
				{{ option.name }}
			</option>
		</select><br><br>

		<span>Пільги</span><br>
		<select v-model="MTPLIC_k6">
			<option v-for="option in MTPLIC_options_privilege" :value="option.value">
				{{ option.text }}
			</option>
		</select><br><br>

		<span>Використання</span><br>
		<select v-model="MTPLIC_used">
			<option v-for="option in MTPLIC_options_used" :value="option.id">
				{{ option.text }}
			</option>
		</select><br><br>

		<span>Термін дії поліса</span><br>
		<select v-model="MTPLIC_k5">
			<option v-for="option in MTPLIC_options_TD" :value="option.value">
				{{ option.text }}
			</option>
		</select><br><br><br>
		<div class="MTPLIC_title">Вартість {{ suma }} грн</div>
	</div>
</div>