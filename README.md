# Coding Conf Component Library

A reusable component library for creating beautiful conference registration experiences with real-time collaboration features.

## Features

- Self-contained, reusable React components
- Clean, modern design with a dark theme
- Form validation and error handling
- File upload with preview
- Responsive design
- Real-time user attribution for collaborative editing
- TypeScript support for type safety

## Component Library Structure

```
src/
├── lib/
│   ├── components/        # Reusable UI components
│   ├── theme/             # Design system: colors, typography, spacing
│   ├── types/             # TypeScript interfaces
│   └── utils/             # Helper functions
├── pages/                 # Demo pages using the components
└── App.tsx                # Main application
```

## Components

The library includes these core components:

- `Button`: Customizable button with multiple variants and states
- `TextField`: Text input field with validation
- `UploadField`: File upload component with drag-and-drop
- `Card`: Container component with different styles
- `Typography`: Text component with consistent styling
- `Avatar`: User avatar display with fallback
- `Ticket`: Conference ticket display
- `Layout`: Page layout with background styling

## Usage

Here's how to use the components in your project:

```jsx
import { 
  Button, 
  TextField, 
  Card, 
  Typography 
} from './lib/components';

function MyForm() {
  const [name, setName] = useState('');

  return (
    <Card variant="default">
      <Typography variant="h2" color="#ffffff">
        Register Now
      </Typography>
      
      <TextField
        id="name"
        label="Your Name"
        value={name}
        onChange={setName}
        required
      />
      
      <Button variant="primary" size="large">
        Submit
      </Button>
    </Card>
  );
}
```

## Demo Pages

The project includes two demo pages:

1. **Registration Page**: Form for collecting user information
2. **Confirmation Page**: Displays generated ticket after registration

## Running the Demo

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open your browser to the local server URL

## Collaboration Features

The component library supports real-time collaboration:

- Change tracking for all form fields
- User attribution for each change
- History of all modifications with timestamps

This allows for identifying which user made which change.