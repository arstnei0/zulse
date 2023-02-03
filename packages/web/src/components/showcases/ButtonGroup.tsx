import { Button } from "zulse/Button"
import { ButtonGroup } from "zulse/ButtonGroup"
import { Showcase, ShowcaseBox } from "zulse/Showcase"

export const ButtonGroupShowcase = () => {
	return (
		<ShowcaseBox>
			<Showcase>
				<ButtonGroup>
					<Button>Follow</Button>
					<Button variant="primary">Follow</Button>
				</ButtonGroup>
			</Showcase>
		</ShowcaseBox>
	)
}
