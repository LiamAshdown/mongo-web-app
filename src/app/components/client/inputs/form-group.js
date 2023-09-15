import Label from '@/app/components/client/inputs/label'

const FormGroup = ({ children, label }) => {
  return (
    <div>
      <Label className="mb-1">{label}</Label>
      {children}
    </div>
  )
}

export default FormGroup
