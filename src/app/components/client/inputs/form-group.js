import Label from '@/app/components/client/inputs/label'
import classNames from 'classnames'

const FormGroup = ({ children, label, className }) => {
  return (
    <div className={classNames(className)}>
      <Label className="mb-1">{label}</Label>
      {children}
    </div>
  )
}

export default FormGroup
