import styled from 'styled-components';

const Form = styled.form`
    padding: 20px;
`

const FormGroup = styled.div`
  display: block;
  margin-bottom: 10px;
`

const Label = styled.label`
  display: block;
  color: rgba(76, 76, 76, 100);
  font-size: 14px;
  padding-bottom: 7px;
  font-weight: 400;
`

const Input = styled.input`
  font-size: 12px;
  border: 1px solid rgba(220, 220,220, 100);
  line-height: 25px;
  padding: 3px 10px;
  box-sizing: border-box;
  outline: 0;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  resize: none;
  width: 100%;
  display: block;
  color: rgba(76, 76, 76, 100);

  &[type="time"] {
    background: white url('${props => props.icon}') no-repeat 8px center;
    background-size: 18px;
    padding-left: 34px;
  }
`

const TextArea = styled.textarea`
  font-size: 12px;
  border: 1px solid rgba(220, 220,220, 100);
  line-height: 25px;
  padding: 3px 10px;
  box-sizing: border-box;
  outline: 0;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  resize: none;
  width: 100%;
  display: block;
  color: rgba(76, 76, 76, 100);
`

const Button = styled.button`
  width: 100%;
  display: block;
  color: rgba(76, 76, 76, 100);

  display: block;
  text-align: center;
  width: 100%;
  padding: 12px;
  appearance: none;
  border-radius: 4px;
  outline: 0;
  border: 1px;
  margin-bottom: 5px;
  font-size: 13px;
  font-weight: 300;
  cursor: pointer;

  &[type="submit"] {
    background: rgba(85,190,	100, 100);
    color: white;
    &:hover {
      background: #44a953;
    }
  }

  &[type="reset"] {
    color: rgba(70,	70,	70, 100);
    background: rgba(209,	209,	209, 100);
    &:hover {
      background: #bfbfbf;
    }
  }
`

export {
  Form,
  FormGroup,
  Label,
  Input,
  TextArea,
  Button
}
