import { Component, JSX } from "solid-js"
import "./ButtonGroup.sass"

export const ButtonGroup: Component<{ children: JSX.Element }> = (props) => {
	return <div class="z-button-group">{props.children}</div>
}
