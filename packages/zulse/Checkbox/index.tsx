import { Component, Show, createEffect, createSignal } from "solid-js"
import "./Checkbox.sass"
import { Hoverable } from "../Cursor"

export const Checkbox: Component<{
	label?: string
	default?: boolean
	update?: (checked: boolean) => any
}> = (props) => {
	const [checked, setChecked] = createSignal(props.default ?? false)
	createEffect(() => props.update?.(checked()))

	return (
		<div class="z-checkbox-container">
			<Hoverable shadow={false}>
				<button
					class="z-checkbox"
					onClick={() => setChecked((c) => !c)}
					classList={{
						checked: checked(),
					}}
				>
					<Show
						when={checked()}
						fallback={
							// prettier-ignore
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"></svg>
						}
					>
						{/* prettier-ignore */}
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M9 16.17L5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41L9 16.17z"></path></svg>
					</Show>
				</button>
			</Hoverable>
		</div>
	)
}
