import React from "react";
import Particles from "react-particles-js";

const ParticlesJs = () => {
    return (
        <div
            style={{
                position: "absolute",
                left: 10,
                top: 0,
                width: "100%",
                height: "100%",
            }}
        >
            <Particles
                params={{
                    particles: {
                        number: {
                            value: 50,
                        },
                        size: {
                            value: 3,
                        },
                    },
                    interactivity: {
                        detect_on: "window",
                        events: {
                            onhover: {
                                enable: true,
                                mode: "repulse",
                            },
                            onclick: {
                                enable: false,
                                mode: "bubble",
                            },
                            resize: true,
                        },
                        modes: {
                            grab: {
                                distance: 400,
                                line_linked: {
                                    opacity: 1,
                                },
                            },
                            bubble: {
                                distance: 400,
                                size: 20,
                                duration: 2,
                                opacity: 8,
                                speed: 3,
                            },
                            repulse: {
                                distance: 100,
                                duration: 0.4,
                            },
                            push: {
                                particles_nb: 4,
                            },
                            remove: {
                                particles_nb: 2,
                            },
                        },
                    },
                }}
            />
        </div>
    );
};

export default ParticlesJs;
