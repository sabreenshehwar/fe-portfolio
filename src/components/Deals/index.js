import React from 'react'
import { DealsContainer, DealsWrapper, DealsCard, DealsH1, DealsH5, DealsSubheading, Experience, DealsP } from './DealsElements';


const Deals = () => {

    return (
        <DealsContainer>
            <DealsH5>
                Pick your Experience
            </DealsH5>
            <DealsWrapper>
                <DealsCard>
                    <DealsSubheading>
                        $1500&nbsp;-&nbsp;1 week turn-around
                    </DealsSubheading>
                    <DealsH1>
                        Brand<br />
                        Refresh
                    </DealsH1>
                    <Experience>
                        <DealsP>
                            Creating a new “personality” for your brand: replacing images, background, custom fonts and color pallete.
                        </DealsP>
                        <DealsP>

                            Prepared checklists + streamlined communication
                        </DealsP>
                        <DealsP>

                            Website testing: making sure your website is running to its highest capabilities
                        </DealsP>
                    </Experience>
                </DealsCard>
                <DealsCard>
                    <DealsSubheading>
                        $3000&nbsp;- &nbsp;1 week turn-around
                    </DealsSubheading>
                    <DealsH1>
                        The <br />
                        Architect
                    </DealsH1>
                    <Experience>
                        <DealsP>
                            5 page Website; include home,about,offers,work, and contact.
                        </DealsP>
                        <DealsP>
                            Branding:custom fonts, color pallete, and IG highlights
                        </DealsP>
                        <DealsP>
                            Prepared checklists + streamlined communication
                        </DealsP>
                        <DealsP>
                            Website training with private support + how-to content
                        </DealsP>
                    </Experience>
                </DealsCard>
                <DealsCard>
                    <DealsSubheading>
                        $5000-10,000&nbsp;-&nbsp;
                        <br />
                        turn-around will depend on the scale of the project
                    </DealsSubheading>
                    <DealsH1>
                        The <br />
                        Empire
                    </DealsH1>
                    <Experience>
                        <DealsP>

                            10+ page Website; 2-3 sales pages, products/shop +more
                        </DealsP>
                        <DealsP>

                            Branding:custom fonts, color pallete, and IG highlights
                        </DealsP>
                        <DealsP>

                            Prepared checklists + streamlined communication
                        </DealsP>
                        <DealsP>

                            Website training with private support + how-to content
                        </DealsP>
                    </Experience>
                </DealsCard>
            </DealsWrapper>
        </DealsContainer >
    )
}

export default Deals