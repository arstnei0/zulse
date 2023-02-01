import { Component, JSX, Show } from "solid-js"
import "./Dropdown.sass"
import { Hoverable } from "../Cursor"

export const Dropdown: Component<{
	children: JSX.Element
	button: JSX.Element
	open: boolean
}> = (props) => {
	return (
		<>
			<div class="z-dropdown-container">
				<div class="z-dropdown-button">{props.button}</div>
				<Show when={props.open}>
					<div
						class="z-dropdown-items"
						classList={{
							open: props.open,
						}}
					>
						{props.children}
					</div>
				</Show>
			</div>
		</>
	)
}

export const DropdownItem: Component<{
	children: JSX.Element
	action?: any
}> = (props) => {
	return (
		<>
			<Hoverable shadow={false}>
				<div class="z-dropdown-item" onClick={(e) => props.action?.()}>
					{props.children}
				</div>
			</Hoverable>
		</>
	)
}

export const DropdownDivider: Component = () => {
	return <div class="z-dropdown-divider"></div>
}
