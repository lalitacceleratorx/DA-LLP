import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav style={{
      boxSizing: 'border-box',
      position: 'sticky',
      width: '100%',
      height: '80px',
      left: '0px',
      top: '0px',
      borderBottom: '1px solid #1D1D1D',
      background: '#0E0E0E',
      zIndex: 50,
      display: 'flex',
      justifyContent: 'center',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'relative',
        width: '1440px',
        maxWidth: '100%',
        height: '80px'
      }}>
        {/* Rectangle 2 */}
        <div style={{
          position: 'absolute',
          width: '1300px',
          height: '60px',
          left: 'calc(50% - 1300px/2)',
          top: '10px',
          background: '#0A0A0A',
          backdropFilter: 'blur(5px)',
          WebkitBackdropFilter: 'blur(5px)',
          borderRadius: '100px'
        }} />

        {/* Group 3 */}
        <div style={{
          position: 'absolute',
          width: '128px',
          height: '19px',
          left: '90px',
          top: '30px'
        }}>
          <img
            src="/logo.png"
            alt="AcceleratorX Logo"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>

        {/* Group 5 */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '0px',
          gap: '56px',
          position: 'absolute',
          width: '478px',
          height: '20px',
          left: '645px',
          top: '30px'
        }}>
          {/* Frame 51298 (Home) */}
          <div style={{
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0px',
            gap: '10px',
            width: '39px',
            height: '20px',
            borderBottom: '1px solid #3E38E0'
          }}>
            <div style={{
              width: '39px',
              height: '20px',
              fontFamily: "'Inter', sans-serif",
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '20px',
              display: 'flex',
              alignItems: 'center',
              letterSpacing: '-0.36px',
              color: '#DFDFDF'
            }}>Home</div>
          </div>
          
          {/* Programs */}
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '5px',
            height: '20px'
          }}>
            <div style={{
              fontFamily: "'Inter', sans-serif",
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '20px',
              display: 'flex',
              alignItems: 'center',
              letterSpacing: '-0.36px',
              color: '#DFDFDF',
              height: '20px'
            }}>Programs</div>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5 5L9 1" stroke="#DFDFDF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* About */}
          <div style={{
            width: '40px',
            height: '20px',
            fontFamily: "'Inter', sans-serif",
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '20px',
            display: 'flex',
            alignItems: 'center',
            letterSpacing: '-0.36px',
            color: '#DFDFDF'
          }}>About</div>

          {/* Blog */}
          <div style={{
            width: '29px',
            height: '20px',
            fontFamily: "'Inter', sans-serif",
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '20px',
            display: 'flex',
            alignItems: 'center',
            letterSpacing: '-0.36px',
            color: '#DFDFDF'
          }}>Blog</div>

          {/* Job Portal */}
          <div style={{
            width: '66px',
            height: '20px',
            fontFamily: "'Inter', sans-serif",
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '20px',
            display: 'flex',
            alignItems: 'center',
            letterSpacing: '-0.36px',
            color: '#DFDFDF'
          }}>Job Portal</div>
        </div>

        {/* Group 4 */}
        <div style={{
          position: 'absolute',
          width: '166px',
          height: '28px',
          left: '1193px',
          top: '26px'
        }}>
          {/* Link -> Log In */}
          <div style={{
            position: 'absolute',
            width: '40px',
            height: '20px',
            left: '0px',
            top: 'calc(50% - 20px/2)',
            fontFamily: "'Inter', sans-serif",
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '20px',
            display: 'flex',
            alignItems: 'center',
            letterSpacing: '-0.36px',
            color: '#DFDFDF'
          }}>
            Log In
          </div>

          {/* Link */}
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '0px 0px 0px 12px',
            position: 'absolute',
            width: '110px',
            height: '28px',
            left: '56px',
            top: 'calc(50% - 28px/2)',
            borderRadius: '33554400px'
          }}>
            {/* Frame 51296 */}
            <div style={{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '2px 4px',
              gap: '10px',
              width: '71px',
              height: '28px',
              border: '1px solid #3E38E0',
              borderRadius: '20px',
              flex: 'none',
              order: 0,
              flexGrow: 0,
              margin: '0px -1px',
              zIndex: 2
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0px 6px',
                width: '63px',
                height: '20px',
                flex: 'none',
                order: 0,
                alignSelf: 'stretch',
                flexGrow: 0
              }}>
                <div style={{
                  width: '51px',
                  height: '20px',
                  fontFamily: "'Inter', sans-serif",
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: '14px',
                  lineHeight: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  letterSpacing: '-0.36px',
                  color: '#DFDFDF',
                  flex: 'none',
                  order: 0,
                  flexGrow: 0
                }}>
                  Sign Up
                </div>
              </div>
            </div>

            {/* Background */}
            <div style={{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              padding: '6px',
              width: '28px',
              height: '28px',
              border: '1px solid #3E38E0',
              borderRadius: '33554400px',
              flex: 'none',
              order: 1,
              flexGrow: 0,
              zIndex: 1
            }}>
              <div style={{
                width: '16px',
                height: '16px',
                flex: 'none',
                order: 0,
                alignSelf: 'stretch',
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.08337 9.91667L9.91671 4.08333M9.91671 4.08333H4.08337M9.91671 4.08333V9.91667" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
};

