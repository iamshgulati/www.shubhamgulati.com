import React from "react";
import { ArrowTopRightIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Box, Button, Flex, Grid, Link, Section, Text } from "@radix-ui/themes";

import { HeroHeading } from "~/components/page-heading";
import { siteConfig } from "~/config/site";
import styles from "./page.module.css";

export default function HomePage(): React.JSX.Element {
  return (
    <React.Fragment>
      <Section size={{ initial: "2", xs: "4" }} pb="7">
        <Box
          mx={{ initial: "4", xs: "5", sm: "6", md: "9", xl: "auto" }}
          style={{ maxWidth: "1400px" }}
        >
          <Grid
            gapX="9"
            gapY={{ initial: "4", lg: "6" }}
            className={styles.HeroGridContainer}
          >
            <Box className={styles.HeroHeadingContainer}>
              <HeroHeading as="h1">
                Hello! I&apos;m
                <br />
                Shubham Gulati,
              </HeroHeading>
            </Box>
            <Box className={styles.HeroPastExperienceContainer}>
              <Text
                as="p"
                size={{ initial: "3", xs: "4", sm: "5" }}
                wrap="balance"
              >
                Senior Software Engineer and Certified Cloud Architect. Past —
                Senior Technology Consultant @ Deloitte Consulting.
              </Text>
            </Box>
            <Box className={styles.HeroCurrentlyContainer}>
              <Text
                as="p"
                size={{ initial: "3", xs: "4", sm: "5" }}
                wrap="balance"
              >
                I love tinkering with code. And, currently I am{" "}
                <Text color="gray">
                  <s>
                    learning the craft of designing high-performance cloud
                    architectures and minimalistic front-end interfaces
                  </s>
                </Text>{" "}
                <Text>
                  just trying to figure out what do I want to do with my life.
                </Text>
              </Text>
            </Box>
            <Box className={styles.HeroCTADescription}>
              <Text
                as="p"
                size={{ initial: "3", xs: "4", sm: "5" }}
                wrap="balance"
              >
                Here&apos;s many useless facts about me and a few{" "}
                <strong>less useless things</strong> that I can do.
              </Text>
            </Box>
            <Flex
              direction={{ initial: "column", lg: "row" }}
              gap={{ initial: "3", xs: "5" }}
              mt="2"
              className={styles.HeroCTAButtonsContainer}
              style={{
                textAlign: "center",
              }}
            >
              {/* 
              <NextLink href="/work">
                <Button
                  size="3"
                  style={{
                    width: "100%",
                    paddingLeft: "var(--space-5)",
                    paddingRight: "var(--space-5)",
                    gap: "var(--space-2)",
                  }}
                >
                  <Icons.HammerIcon width="18" height="18" aria-hidden />
                  <Text>WORK</Text>
                </Button>
              </NextLink>
              */}
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  size="3"
                  style={{
                    width: "100%",
                    paddingLeft: "var(--space-5)",
                    paddingRight: "var(--space-5)",
                    gap: "var(--space-2)",
                  }}
                >
                  <LinkedInLogoIcon width="18" height="18" aria-hidden />
                  <Text>LinkedIn</Text>
                </Button>
              </a>
              <a
                href={siteConfig.links.resume}
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="soft"
                  size="3"
                  style={{
                    width: "100%",
                    paddingLeft: "var(--space-5)",
                    paddingRight: "var(--space-5)",
                    gap: "var(--space-2)",
                  }}
                >
                  <ArrowTopRightIcon width="18" height="18" aria-hidden />
                  <Text>RESUME</Text>
                </Button>
              </a>
            </Flex>
          </Grid>
        </Box>
      </Section>
    </React.Fragment>
  );
}
