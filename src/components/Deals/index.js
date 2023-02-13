import React from 'react'
import { DealsContainer, DealsWrapper, DealsCard, DealsH1, DealsSubheading, Experience, DealsP, DealsInfo } from './DealsElements';
import { WorkH5 } from '../Work/WorkElements';


const Deals = () => {

    return (
        <DealsContainer>
            <WorkH5>
                Pick your Experience
            </WorkH5>
            <DealsWrapper>
                <DealsCard>
                    <DealsSubheading>
                        $1500&nbsp;-&nbsp;1 week turn-around
                    </DealsSubheading>
                    <DealsH1>
                        Brand<br />
                        Refresh
                    </DealsH1>
                    <DealsInfo>
                        Nothing lasts forever. That applies to branding too. You're most likely here to get all the aesthetics without having to build a whole new website. I got you!
                    </DealsInfo>
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
                    <DealsInfo>
                        A specially curated experience. You’re not selling a product, you're selling an experience. You provide a service that isn't as simple as putting a price tag on a product.

                    </DealsInfo>
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
                    <DealsInfo>
                        The Empire is designed to help you build a one-of-a-kind ecommerce store that reflects your brand. Build an elevated online empire that sets you apart from the competition and drives success for your business.
                    </DealsInfo>
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