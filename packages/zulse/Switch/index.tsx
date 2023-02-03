import { Component, createEffect, createSignal } from "solid-js"
import "./Switch.sass"
import { Hoverable } from "../Cursor"

export const Switch: Component<{
	default?: boolean
	update?: (checked: boolean) => any
}> = (props) => {
	const [checked, setChecked] = createSignal(props.default ?? true)
	createEffect(() => props.update?.(checked()))

	return (
		<Hoverable>
			<div
				class="z-switch"
				classList={{
					checked: checked(),
				}}
				onClick={() => setChecked((c) => !c)}
			>
				<span class="inner" />
			</div>
		</Hoverable>
	)
}
