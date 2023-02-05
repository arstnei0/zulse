import { Component, JSX } from "solid-js"
import "./Card.sass"
import { Hoverable } from "../Cursor"

export const Card: Component<{ children: JSX.Element }> = (props) => {
	return (
		<Hoverable>
			<div class="z-card">{props.children}</div>
		</Hoverable>
	)
}
