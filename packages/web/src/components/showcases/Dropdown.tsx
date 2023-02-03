import { Component, createSignal } from "solid-js"
import { Showcase, ShowcaseBox } from "zulse/Showcase"
import { Dropdown, DropdownDivider, DropdownItem } from "zulse/Dropdown"
import { Button, ButtonBare } from "zulse/Button"

export const DropdownShowcase: Component = () => {
	const [open, setOpen] = createSignal(false)
	return (
		<ShowcaseBox>
			<Showcase>
				<Dropdown
					open={open()}
					button={
						<Button onClick={() => setOpen((o) => !o)}>Open</Button>
					}
				>
					<DropdownItem
						action={() => {
							console.log("thanks")
						}}
					>
						Follow me
					</DropdownItem>
					<DropdownItem>Chat with me</DropdownItem>
					<DropdownDivider />
					<DropdownItem>Work with me</DropdownItem>
				</Dropdown>
			</Showcase>
		</ShowcaseBox>
	)
}
