import React from 'react'
import { Column1, Column2, PackagesContainer, PackagesRow, PackagesWrapper, PHeader, PSubheader } from './PackageElements'

const Packages = () => {
    return (
        <PackagesContainer>
            <PackagesWrapper>
                <PackagesRow>
                    <Column1>
                        &nbsp;
                    </Column1>
                    <Column2>
                        <PHeader initial={{ opacity: 0, scale: 1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 2,
                                delay: 0.4,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}>
                            Closed Mouths <br />
                            Don't get fed
                        </PHeader>
                        <PSubheader initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 2,
                                delay: 1,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}>
                            Want to stand out from your competitors? Stop chasing clients. Attract them with a distinct and one-of-a-kind and expertly crafted experience and start feeding your business.

                        </PSubheader>
                    </Column2>
                </PackagesRow>
            </PackagesWrapper>
        </PackagesContainer>
    )
}

export default Packages