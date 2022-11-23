import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import './fromHook.css'


const FormHook = () => {
    const { register, getValues, handleSubmit, formState: { errors } } = useForm();
    const onSub = (data) => {
        delete data.confirmPassword
        console.log(data);
    }

    console.log(errors)
    return (
        <div>
        <div className='myBody'> 
        <div className='d-flex flex-column align-items-center '>

            <form onSubmit={handleSubmit(onSub)} className='col-7 col-md-5 col-lg-3 mt-5'>
                <div>
                    <label className='myLabel'>First Name:</label>
                    <input {...register('firstName', { required: { value: true, message: 'first name is requried' }, minLength: { value: 3, message: "first name must be at least 3 characters" } })} className='myInput' />
                    {errors.firstName && errors.firstName.type == 'required' && <small className='error'>{errors?.firstName?.message}</small>}
                    {errors.firstName && errors.firstName.type == 'minLength' && <small className='error'>{errors?.firstName?.message}</small>}
                </div>
                <div>
                    <label className='myLabel'>Last Name:</label>
                    <input {...register('lastName', { required: true, minLength: 2 })} className='myInput' />
                    {errors.lastName && <small className='error'>invalid last name...</small>}

                </div>
                <div>
                    <label className='myLabel'>Email:</label>
                    <input {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} className='myInput' />
                    {errors.email && <small className='error'>invalid email...</small>}
                </div>
                <div>
                    <label className='myLabel'>Password:</label>
                    <input type={'password'}  {...register('password', { required: { value: true, message: 'password is requried' }, minLength: { value: 6, message: "invalid password" } })} className='myInput' />
                    {errors.password && errors.password.type == 'required' && <small className='error'>{errors?.password?.message}</small>}
                    {errors.password && errors.password.type == 'minLength' && <small className='error'>{errors?.password?.message}</small>}
                </div>
                <div>
                    <label className='myLabel'>Confirm Password:</label>
                    <input type={'password'} {...register('confirmPassword', { required: { value: true, message: 'Confirm password required...' }, validate: { validate:( (value) => value === getValues('password')) } })} className='myInput' />
                    {errors.confirmPassword && errors.confirmPassword.type == 'required' && <small className='error'>{errors?.confirmPassword?.message}</small>}
                    {errors.confirmPassword && errors.confirmPassword.type == 'validate' && <small className='error'>Password isn't match</small>}
                </div>
                <div>
                    <label className='myLabel'>Phone:</label>
                    <input {...register('phone')} className='myInput' />
                </div>

                <div class="d-grid gap-2">
  <button className='btn btn-outline-danger p-2 mt-3'>Submit</button>
  <br></br>

</div>
            </form>

            </div>
          
            </div>
            <section id="about">
                <section className='sc-hLBbgP iwhAby'>
                <div class="row">
      <div class="col-lg-4">
        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

        <h2 class="fw-normal">Heading</h2>
        <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
        <p><a class="btn btn-secondary" href="#">View details »</a></p>
      </div>
      <div class="col-lg-4">
        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

        <h2 class="fw-normal">Heading</h2>
        <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
        <p><a class="btn btn-secondary" href="#">View details »</a></p>
      </div>
      <div class="col-lg-4">
        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

        <h2 class="fw-normal">Heading</h2>
        <p>And lastly this, the third column of representative placeholder content.</p>
        <p><a class="btn btn-secondary" href="#">View details »</a></p>
      </div>
    </div>                    
         </section>              
    </section>

    <section id="about">
                <section className='sc-hLBbgP iwhAbys'>
               <div class="d-flex gap-5 justify-content-center">
  <ul class="dropdown-menu position-static d-grid gap-1 p-2 rounded-3 mx-0 shadow w-220px">
    <li><a class="dropdown-item rounded-2 active" href="#">Action</a></li>
    <li><a class="dropdown-item rounded-2" href="#">Another action</a></li>
    <li><a class="dropdown-item rounded-2" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></hr></li>
    <li><a class="dropdown-item rounded-2" href="#">Separated link</a></li>
  </ul>
  <ul class="dropdown-menu dropdown-menu-dark position-static d-grid gap-1 p-2 rounded-3 mx-0 border-0 shadow w-220px">
    <li><a class="dropdown-item rounded-2 active" href="#">Action</a></li>
    <li><a class="dropdown-item rounded-2" href="#">Another action</a></li>
    <li><a class="dropdown-item rounded-2" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></hr></li>
    <li><a class="dropdown-item rounded-2" href="#">Separated link</a></li>
  </ul>
</div>  
         </section>              
    </section>

        </div>
    )
}

export default FormHook

/// האתר שממנו לקחתי - https://getbootstrap.com/docs/5.2/examples/carousel/
/// האתר שממנו לקחתי - https://getbootstrap.com/docs/5.2/examples/dropdowns/
/// האתר שממנו לקחתי - https://react-scroll-section.netlify.app/
