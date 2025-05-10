import React from 'react';
import { TicketProps } from '../types';
import { colors, borderRadius, fontFamily, fontSize, transitions, animations, keyframes } from '../theme';
import Typography from './Typography';
import Avatar from './Avatar';

const Ticket: React.FC<TicketProps> = ({ ticket, className = '' }) => {
  const ticketStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    maxWidth: '350px',
    backgroundColor: 'rgba(49, 29, 94, 0.7)',
    borderRadius: borderRadius['2xl'],
    overflow: 'hidden',
    padding: '1.5rem',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    animation: animations.slideUp,
  };

  const glowEffect: React.CSSProperties = {
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    width: '200%',
    height: '200%',
    background: 'radial-gradient(circle at 50% 50%, rgba(249, 115, 22, 0.15), transparent 50%)',
    zIndex: -1,
  };

  const ticketHeaderStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    paddingBottom: '1rem',
  };

  const logoStyle: React.CSSProperties = {
    width: '30px',
    height: '30px',
    backgroundColor: colors.secondary[500],
    borderRadius: borderRadius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: fontFamily.mono,
    fontWeight: 700,
    fontSize: fontSize.sm,
    color: colors.white,
    marginRight: '0.75rem',
  };

  const ticketBodyStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  };

  const ticketInfoStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: fontSize.sm,
    color: colors.gray[300],
  };

  const userInfoStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    marginTop: '1rem',
  };

  const userDetailsStyle: React.CSSProperties = {
    marginLeft: '0.75rem',
  };

  const ticketIdStyle: React.CSSProperties = {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    color: colors.gray[300],
    fontSize: fontSize.xs,
    opacity: 0.7,
  };

  return (
    <div style={ticketStyle} className={className}>
      <div style={glowEffect}></div>
      <div style={ticketIdStyle}>#{ticket.id.slice(0, 8)}</div>
      
      <div style={ticketHeaderStyle}>
        <div style={logoStyle}>{'<>'}</div>
        <div>
          <Typography 
            variant="subtitle1" 
            color={colors.white}
          >
            {ticket.eventName}
          </Typography>
        </div>
      </div>
      
      <div style={ticketBodyStyle}>
        <div style={ticketInfoStyle}>
          <span>Date</span>
          <span style={{ color: colors.white, fontFamily: fontFamily.mono }}>
            {ticket.eventDate}
          </span>
        </div>
        
        <div style={ticketInfoStyle}>
          <span>Location</span>
          <span style={{ color: colors.white }}>
            {ticket.eventLocation}
          </span>
        </div>
        
        <div style={userInfoStyle}>
          <Avatar 
            src={ticket.user.avatarUrl} 
            size="medium" 
            fallback={ticket.user.fullName}
          />
          <div style={userDetailsStyle}>
            <Typography 
              variant="subtitle2" 
              color={colors.white}
            >
              {ticket.user.fullName}
            </Typography>
            <Typography 
              variant="caption" 
              color={colors.gray[400]}
            >
              @{ticket.user.githubUsername}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;