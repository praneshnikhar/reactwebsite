
import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Contact = () => {
  const contactLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/praneshnikhar/",
    },
    {
      name: "Discord",
      href: "https://discord.com/users/756910547093422180",
    },
    {
      name: "Github",
      href: "https://github.com/praneshnikhar",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/pranesh-nikhar/",
    },
    {
      name: "Mail",
      href: "mailto:praneshnikhar@gmail.com",
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="container mx-auto text-center py-12">
        <h2 className="text-3xl font-bold mb-8 text-[#8174A0] dark:text-[#8174A0]">
          Contact Me
        </h2>
        <p className="mb-6 text-[#8174A0] dark:text-[#8174A0]">
          Connect with me on your favorite platforms:
        </p>
        <Stack direction="column" spacing={3} className="items-center">
          {contactLinks.map((link) => (
            <Button
              key={link.name}
              variant="outlined"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#8174A0",
                borderColor: "#8174A0",
                "&:hover": {
                  borderColor: "#8174A0",
                  backgroundColor: "#8174A0",
                },
              }}
            >
              {link.name}
            </Button>
          ))}
        </Stack>
      </div>
    </section>
  );
};

export default Contact;
