import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Grid, Link, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import Discord from '../../../utils/discord';
import Layout from '../../baseComponents/Layout';
import { Trans } from 'react-i18next';

const LINK_PROPS = {
  target: '_blank',
  color: 'rgb(177, 177, 181)',
  rel: 'noopener noreferrer',
  underline: 'hover',
};

const LINKS = [
  { label: 'Discord', href: 'https://discord.gg/s3MjGeZajq', Icon: Discord },
  {
    label: 'Github',
    href: 'https://github.com/discretize/discretize-gear-optimizer',
    Icon: () => <GitHubIcon sx={{ fontSize: '1.5rem' }} />,
  },
  {
    label: 'Discretize',
    href: 'https://discretize.eu/',
    Icon: () => <img src="/logo.png" alt="Discretize Logo" style={{ height: '1.5rem' }} />,
  },
];

const CONTRIBUTORS = [
  { label: 'Marcustyphoon', href: 'https://github.com/marcustyphoon' },
  { label: 'Princeps', href: 'https://github.com/gw2princeps' },
  { label: 'Kulinda', href: 'https://kulinda.github.io/' },
];

export default function Footer() {
  return (
    <Layout ContainerProps={{ sx: { marginTop: 2 } }}>
      <Grid container justifyContent="space-between">
        <Grid item>
          <Typography variant="body2" fontWeight={600}>
            <Trans>Links</Trans>
          </Typography>
          <List disablePadding dense>
            {LINKS.map(({ label, href, Icon }) => (
              <ListItem key={label} disablePadding>
                <ListItemIcon sx={{ minWidth: 'unset' }}>
                  <Icon />
                </ListItemIcon>
                <ListItemText>
                  <Link href={href} {...LINK_PROPS}>
                    {label}
                  </Link>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Grid>

        <Grid item>
          <Typography variant="body2" fontWeight={600}>
            Contributors
          </Typography>
          <List disablePadding dense>
            {CONTRIBUTORS.map(({ label, href }) => (
              <ListItem key={label} disablePadding sx={{ paddingBottom: 0.2 }}>
                <ListItemText>
                  <Link href={href} {...LINK_PROPS}>
                    {label}
                  </Link>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Layout>
  );
}
