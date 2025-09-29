import React from 'react'
import { Box, Container, Typography, Card, CardContent, Button, Avatar, Chip } from '@mui/material'
import { Github, Instagram, Play, Gamepad2, Music, MessageCircle, Mail } from 'lucide-react'
import { styled } from '@mui/material/styles'
import avatarImage from '@/assets/images/avatar.jpg'

const GradientCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)',
  },
}))

const SocialButton = styled(Button)<{
  component?: React.ElementType;
  href?: string;
  target?: string;
  rel?: string;
}>(({ theme }) => ({
  borderRadius: '12px',
  padding: '12px 24px',
  textTransform: 'none',
  fontSize: '1rem',
  fontWeight: 600,
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}))

const InterestChip = styled(Chip)(({ theme }) => ({
  background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
  color: 'white',
  fontWeight: 600,
  margin: '4px',
  '&:hover': {
    background: 'linear-gradient(45deg, #2563eb, #7c3aed)',
  },
}))

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: 8, pt: 4 }}>
          <Avatar
            src={avatarImage}
            sx={{
              width: 120,
              height: 120,
              mx: 'auto',
              mb: 3,
              background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
              fontSize: '3rem',
              fontWeight: 'bold',
            }}
          />
          <Typography
            variant="h1"
            sx={{
              background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2,
            }}
          >
            Ian
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
            15歲台灣學生 • 遊戲愛好者 • Discord活躍用戶
          </Typography>
        </Box>

        {/* About Me Section */}
        <GradientCard sx={{ mb: 6 }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h2" gutterBottom sx={{ mb: 3, textAlign: 'center' }}>
              關於我
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, textAlign: 'center' }}>
              嗨，我是 Ian，一個15歲的台灣學生，我喜歡玩 Roblox、Minecraft、音遊，也很常出現在 Discord 上。
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1 }}>
              <InterestChip icon={<Gamepad2 size={16} />} label="Roblox" />
              <InterestChip icon={<Gamepad2 size={16} />} label="Minecraft" />
              <InterestChip icon={<Music size={16} />} label="音遊" />
              <InterestChip icon={<MessageCircle size={16} />} label="Discord" />
            </Box>
          </CardContent>
        </GradientCard>

        {/* Contact Section */}
        <GradientCard sx={{ mb: 6 }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h2" gutterBottom sx={{ mb: 3, textAlign: 'center' }}>
              聯絡方式
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 4, textAlign: 'center', fontStyle: 'italic', color: 'text.secondary' }}
            >
              如果你想找我，不要來找我。
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
              <SocialButton
                variant="contained"
                startIcon={<MessageCircle />}
                component="a"
                href="https://discord.com/users/871743426620706847"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  background: 'linear-gradient(45deg, #5865f2, #7289da)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #4752c4, #5b6eae)',
                  },
                }}
              >
                Discord: .1an._
              </SocialButton>
              <SocialButton
                variant="contained"
                startIcon={<Instagram />}
                component="a"
                href="https://www.instagram.com/_v1oid"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  background: 'linear-gradient(45deg, #e4405f, #f56040)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #d73447, #e8552e)',
                  },
                }}
              >
                Instagram: _v1oid
              </SocialButton>
              <SocialButton
                variant="contained"
                startIcon={<Play />}
                component="a"
                href="https://b23.tv/mLUrPE2"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  background: 'linear-gradient(45deg, #00a1d6, #00c4cc)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #0081ac, #00a3aa)',
                  },
                }}
              >
                Bilibili: w0_i
              </SocialButton>
              <SocialButton
                variant="contained"
                startIcon={<Mail />}
                component="a"
                href="mailto:nigga@plsdonate.club"
                sx={{
                  background: 'linear-gradient(45deg, #ff6b6b, #ee5a24)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #e55656, #d63031)',
                  },
                }}
              >
                Email: nigga@plsdonate.club
              </SocialButton>
            </Box>
          </CardContent>
        </GradientCard>

        {/* Discord Servers Section */}
        <GradientCard>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h2" gutterBottom sx={{ mb: 4, textAlign: 'center' }}>
              Discord 伺服器
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, textAlign: 'center' }}>
              歡迎加入我的 Discord 伺服器：
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  flex: { xs: '1 1 100%', md: '1 1 45%' },
                  '& iframe': {
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                <iframe
                  src="https://discord.com/widget?id=1164181579191550055&theme=dark"
                  width="350"
                  height="500"
                  style={{ background: 'transparent' }}
                  frameBorder="0"
                  sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  flex: { xs: '1 1 100%', md: '1 1 45%' },
                  '& iframe': {
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                <iframe
                  src="https://discord.com/widget?id=1297496788449624125&theme=dark"
                  width="350"
                  height="500"
                  style={{ background: 'transparent' }}
                  frameBorder="0"
                  sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                />
              </Box>
            </Box>
          </CardContent>
        </GradientCard>

        {/* Footer */}
        <Box sx={{ textAlign: 'center', mt: 6, py: 4 }}>
          <Typography variant="body2" color="text.secondary">
            Made with ❤️ by Ian
          </Typography>
        </Box>
      </Container>
      
      {/* Custom Badge */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 16,
          left: 16,
          background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '20px',
          fontSize: '0.875rem',
          fontWeight: 600,
          boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 6px 20px rgba(59, 130, 246, 0.4)',
          },
          zIndex: 1000,
        }}
      >
        AI太好用了你們知道嗎
      </Box>
    </Box>
  )
}
