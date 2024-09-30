# Taller-de-conceptos-react

## componentes UI y funcionalidades ##
¿Cuál es la diferencia entre un componente UI y un componente funcional en React?
--Respuesta--

Un componente UI: solo renderiza en la interfaz, recibe informacion y los muestra de forma presentable, nada de logica añadida.

Un componente funcional: maneja logica y se renderiza en la UI, puede gestionar las interacciones con otros componentes cosa que el componente UI no puede hacer.

## Props en react y su proposito ##
Los props son propiedades los que permiten pasar datos de un componente a otro, la informacion solo va del componente padre al componente hijo, su proposito es hacer de los componentes mas dinamicos y reutilizables 

## Que son los childrenprops y porque no usarlos tanto? ##
Es una condicion especial que le permite a los props reicibir informacion de otros componentes, no se recomienda usar tantos ya que impactan la lectura facil de los documentos ya que cada vez se hace mas dificil seguir la estructura de arbol que se crea.

## Que es useState en React y su principal uso ##
Gracias a useState podemos manejar el estado dentro de los componentes funcionales, podemos poner un valor como por ejemplo un contador y renderizar los valores reflejados al sumar o restar numeros o tambien para otras cosas como sumas y restas a tiempo real
