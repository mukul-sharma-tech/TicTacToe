import React, { useCallback, useState } from 'react';
import { UploadFieldProps } from '../types';
import { colors, borderRadius, transitions, fontSize } from '../theme';
import { Upload } from 'lucide-react';

const UploadField: React.FC<UploadFieldProps> = ({
  id,
  onChange,
  value,
  preview = '',
  error,
  label = 'Upload file',
  accept = 'image/*',
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string>(preview);

  // Handle drag events
  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer) {
      e.dataTransfer.dropEffect = 'copy';
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      handleFile(file);
    }
  }, []);

  // Handle file selection
  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      handleFile(file);
    }
  };

  const handleFile = (file: File) => {
    onChange(file);
    
    // Create a preview URL
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  // Reset the field
  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(null);
    setPreviewUrl('');
  };

  // Styles
  const containerStyle: React.CSSProperties = {
    width: '100%',
    marginBottom: '1.5rem',
    position: 'relative',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    marginBottom: '0.5rem',
    color: colors.white,
    fontSize: fontSize.sm,
    fontWeight: 500,
  };

  const dropzoneStyle: React.CSSProperties = {
    padding: '2rem',
    borderRadius: borderRadius.lg,
    border: `2px dashed ${isDragging ? colors.primary[400] : 'rgba(255, 255, 255, 0.2)'}`,
    backgroundColor: isDragging ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.05)',
    color: colors.white,
    textAlign: 'center',
    cursor: 'pointer',
    transition: transitions.DEFAULT,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    backdropFilter: 'blur(5px)',
    minHeight: '150px',
  };

  const errorStyle: React.CSSProperties = {
    color: colors.error,
    fontSize: fontSize.xs,
    marginTop: '0.25rem',
  };

  const previewStyle: React.CSSProperties = {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: borderRadius.lg,
    marginTop: '1rem',
    border: `1px solid rgba(255, 255, 255, 0.2)`,
  };

  const resetButtonStyle: React.CSSProperties = {
    position: 'absolute',
    top: '0.5rem',
    right: '0.5rem',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: colors.white,
    border: 'none',
    borderRadius: borderRadius.full,
    width: '1.5rem',
    height: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    zIndex: 10,
  };

  return (
    <div style={containerStyle}>
      <label htmlFor={id} style={labelStyle}>{label}</label>
      <div
        style={dropzoneStyle}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById(id)?.click()}
      >
        {!previewUrl ? (
          <>
            <Upload size={24} color={colors.white} style={{ marginBottom: '0.5rem' }} />
            <p>Drag and drop or click to upload</p>
            <p style={{ fontSize: fontSize.xs, color: colors.gray[400], marginTop: '0.5rem' }}>Supported formats: JPG, PNG, GIF</p>
          </>
        ) : (
          <div style={{ position: 'relative', width: '100%' }}>
            <img src={previewUrl} alt="Preview" style={previewStyle} />
            <button onClick={handleReset} style={resetButtonStyle}>×</button>
          </div>
        )}
        <input
          id={id}
          type="file"
          onChange={handleFileInput}
          accept={accept}
          style={{ display: 'none' }}
        />
      </div>
      {error && <p style={errorStyle}>{error}</p>}
    </div>
  );
};

export default UploadField;