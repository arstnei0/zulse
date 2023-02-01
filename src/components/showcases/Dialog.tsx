import { Component, createSignal } from "solid-js"
import { Showcase, ShowcaseBox } from "../Showcase"
import { Button } from "../Button"
import { Dialog } from "../Dialog"

export const DialogShowcase: Component = () => {
	const [open, setOpen] = createSignal(false)
	return (
		<ShowcaseBox>
			<Showcase>
				<Button onClick={() => setOpen((o) => !o)}>Open</Button>
				<Dialog
					open={open()}
					close={() => setOpen(false)}
					header={<h1>Title of the dialog</h1>}
				>
					This is a dialog
				</Dialog>
			</Showcase>
		</ShowcaseBox>
	)
}
