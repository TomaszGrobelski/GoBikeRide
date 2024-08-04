import CopyButton from '@/ui/atmos/Buttons/CopyButton';
import HeaderContact from '@/ui/atmos/Contact/HeaderContact';
import ContactBox from '@/ui/molecules/Contact/ContactBox';
import { Box, Container, Grid, Typography } from '@mui/material';

const ContactView = () => {
  return (
    <section>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 10,
          paddingTop: 10,
        }}
      >
        <HeaderContact />
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <ContactBox title='Adres' icon='ph:map-pin-bold'>
              <Typography>ul. Floriańska 25/4 </Typography>
              <Typography>31-019 Kraków</Typography>
              <Typography>Kraków </Typography>
            </ContactBox>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ContactBox title='Telefon' icon='bi:telephone'>
              <Typography className='text-balance text-center h-[160px]'>
                W przypadku pilnej potrzeby pomocy, prosimy o niezwłoczny
                kontakt telefoniczny. Nasz zespół jest gotowy, by udzielić Ci
                niezbędnej pomocy i rozwiązać wszelkie problemy, jak
                najszybciej.
              </Typography>
              <CopyButton textToCopy='795 003 227'>+48 795 003 227</CopyButton>
            </ContactBox>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ContactBox title='Email' icon='ic:sharp-alternate-email'>
              <Typography className='text-balance text-center h-[160px]' variant='body1'>
                Jeśli napotkałeś jakiekolwiek problemy podczas korzystania z
                naszej strony lub masz pytania, jesteśmy tutaj, aby pomóc!
                Prosimy o kontaktowanie się z nami za pośrednictwem naszego
                adresu e-mail:
              </Typography>
              <Box sx={{ marginTop: 'auto' }}>
                <CopyButton textToCopy='Tomasz.grobelski98@gmail.com'>
                  Tomasz.grobelski98@gmail.com
                </CopyButton>
              </Box>
            </ContactBox>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ContactView;
