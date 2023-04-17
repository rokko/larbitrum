import React from 'react'
import { DivMenu, GroupMenu, TestoMenu } from './MenuLateraleStyled'

const MenuLaterale = () => {
  return (
    <DivMenu>
      <GroupMenu>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '1rem',
            alignContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            style={{ width: '24px', height: '24px' }}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAArElEQVR4nO2WQQ7CIBBFWXkn6wU8mBS9Zm09gLp/phWTxhiZaaZh0Xk7yPB5GRIgBMcpAByBKzq6cV2wgHfYEjorgYnv8XyutMYFVAA74ALcsGMA0pgtETizHq1EYMjFe13v/mY2n05IiiesNlfnIi10ASXbOgKgBZ5ArCXwyDH3WgIxS5yqCPzCBfAjyGhewyYYARxyZi8pTqxHlP6I0qwTFvT5bij/iJzN8QJyZF06Tv7EAwAAAABJRU5ErkJggg=="
          />
          <TestoMenu>Wallet</TestoMenu>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '1rem',
            alignContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            style={{ width: '24px', height: '24px' }}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADt0lEQVR4nO2ZS2yNQRTHv3oVFVJvwkIipBZFaKjHjljYKaEewaoVRGJTjyUSsXNbidpJE4+UVIRuSiSaoHYoIU00xUJb6hXq/ZPTnk+nde/tne+b77aR+9/c5M6c/znnm5nzmPG8DDLIIAMbAEOBQuAQcBl4DHQA34GvQCvQCFzUOYuBLG+wAJgJHAdeYQ+ROQpMG0gHJgKngW+GYU1ABVAMLATGA8OBkcAUYD6wXee8MOSEIwbkJtDVANyNwonNwFs14gdQBSy15MgClgHVwC/lagfWx5nbBZcOyNetNL7kdWC2A955wC2DtxwYFokjwGg1XPAZ2OmEuPcK7dLAILgCZDt1RFfCd+K17H8XxifQtQxoU13XNBo6c6TScGKOE4uT68sH3qjOmBNH9GD72ymylYijd2mfiEjYEOt/mUBnIowRwF5XjkieENSG4OjXCKCeFOAFNGCGLu0P2xCrwWG3JDHDDgmvmwbCkeMqX2UpNwK4kcSeM166QHfI82sn24x9UOWagVVADjAWKALe6diG6Kw3oFWsoMmzBPBMZdfEGSvVsZteOkB3mS2oCCDrZ+acOGOTdeyjM2OTQfsJQXEA2acqu9YbaNDdAAkWBJDdr7IfgBKJYNFYmQKMEn1CwEBxPk7zNMtLN+gpDUaE4FgHPDEckp6jVkr2EJz3gDs2ApKgbgdV2Kc0XwmcBb6oQ9LD7wvAla3yX72BhLa9MV2Z38BqS/lJ6ki7NxhgJMw6S7lFKvcwOut6lH1SZblJ5ozTOe8tubeqXLUTY/tR5heJG/spRgUdASvxMifGpphDGhLlD+CEzqmxDBrNKlfg1OgECqVAfK4KpQJeoVspR++5yvWgS2uwxIJ3uXK2AEOi9aJH6VxVmAhSi22z5DynsseCGpUK/sk3wBjgMHDfmNeo4de2ScsDfgKdwPQoHalPhSOQAV6XfJ1SxIJy9HVkTxiOgLIlKt6aLKSnbISxt1M+oGEBFOh2It59sC2Zj5P6K1dD+c6sTR4w2kJvKYPQx1C9vvSXudCJxYlXok11XTUvs8OQ/t3fWn3WGNus1PWLE91notNwYpQr4l4HVb6OeRerd1V5DvTkGdEJ1RF+JQwFXYjzf5Gx/FKWX9Lsm2VZdizXZCd5QtAa+mDbNlgSDjUImBfNL4FTwA7p9+VtUJ/d5NJugpbiW7QA9GsndDslfHpLC4CpwJE+b4KpokX7+WAZOwroVpEvfgC4ADzS95ROXTW50Higb4ZlGp3SUwBmkEEG3n+DP4qyaE/NjPPTAAAAAElFTkSuQmCC"
          />
          <TestoMenu>Operations</TestoMenu>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '1rem',
            alignContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            style={{ width: '24px', height: '24px' }}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADuUlEQVR4nO2aSUiVURTHn9lE2QhFm4zITKM0qm000aJVRYWRrxYNIEbQK0ptUdJEA22KZmlRtNGwEcNIxIIGipAkgmrTqoi2kU3+4uL96ni973vf6BD+4YE+z/3/z7nfvec791wTiQH8RwCGAfOAEmA7UKE/KWA1MFfZJPoSgOnAXuAx8IPM+Aa0AJVAbm86vgy4D3QQHL81x0IXneFAGbA8KsdnAk0uTn0EGoBrwBngBHAVeAh8cBn3AMi36B0WNvPDOJ6lH3u7ZRbvAZttDlh4pun9YXt6anntUVrC/rb4+8qgzo8CbhpiP4EaYGog0k7eIqBWT4LEdSBH2zwS3y8MIjIWeGYIPAWKgzpu0ZgDvDY0lOYYoE18508TGGFxXq3pwVE5b2hdNLSeAJ/F796zFjAIuGEQ7knEDKDcJbON9kO0UwxUhDti9bx7EFj23N/N7Qqg0Mg2pzwN7J61SoGkepoe7CqMz3sjgC9+xFVadPBKvUwCBLBecCRd7JJ4wzuvwouNxzbLr/OaZ7/gqY4ggDtehe+KQVeCOO8zgEE6iKMuH/UCneBFdIrIAOrlUhh3AJEC2O37kfWxAFqE6NZ+FQAwBPgqRHP7WwCzheCbCPh6PIAVQrChPwZQJgQv9bUA+Jduk9aSQtU6QvBgxAGo8ntSSL6k4Cu1GewSBsfDiGm+dXTFJ2BpCL7DgqvKZrBFGNREEIAq0vYBvwSv+rkayA7Ad1rwbLMZrBIG9WEDELxL9EFfosnvkqLrkXZtum6Dg7aoAtDck3TXQUIF5XlJAW/F2KJ0L7J28ai9n368OZCtN7ZtSWV5qNEctKct741+T/fHFN+S2phhjNyfzW6GqifjoC6OANIsqZIM9reEbaWb4WTRo/keNnd7WFIbgDUZ7AqET78z1mi6LejgZKKXAVwW/jR6GbDAaPUV9IinFujM+MN3Z073LR08Vxkq0cMAhgIvfc2+GJyvZ9/BgVi9tQA4ZqTOfL8EsjbqCHtCC1AZdwj9VNBapl6QqAywKRaP3Z2v99yRMwGM1FdHMoiDcewJOiuBI4bzSntEWOJxukssoTrWeRE6XwC8MDSU8+OjbH2bnWq1sc6FvODIA84bCcNZNuFmPs2eSOk3NEb7sVafmCZ64MnRV651RmHnTEoq8Jr3GMgM4z2BsUdade1yVh9oDgEX9Ky2Wpx20Og7VYYMZJEWDXvN2hjo7ivCQFStXqW7euYNpg3KprnXL7pdLqWL1VlC37I4lxXl+rviPvevBgNIhMMfUV5aqezayaAAAAAASUVORK5CYII="
          />

          <TestoMenu>History</TestoMenu>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '1rem',
            alignContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            style={{ width: '24px', height: '24px' }}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEC0lEQVR4nO2bOWgWQRTHJ4pHMF6giCeIWghGGxNTRxubqBBjI4hYCV5gIRZKTCSx8+jshAQUrD1SahVTaaOSQlHj2UiMN8SfPL+JLOPM7s4eZtlvf/DBF/KfeW9md968OT6lKioqKioqcgcYIj53VdkA3nt0wHtVJoDV+LNKlQVgT4IO2K3KAnDeaFyfRdNvaHpVWQDuGI3ba9F0GZrbqsQBcJ1Fs97QfFBlANhpNGwcaLDoGvT/guxURQKYI68mcBbYGKHdAdy3BLd7IWXuWfRSx44IWxu1T+LbHJUXwCnDuYfAaWBtQLMQGMTNxZD6L4aUkzoXBrRrtW3xIcipvBq/HPjkcO4XMAycAV44NN+Am0BziI1mrRGtjRfaxrC2aUN8XJ5HB1wjGa+AI8AiD1uLgKPAWEKb17Ju/DZLj09GOPED6E4zJoG5wDngZ4Qt0xfxdVtWjW/Qr1yQB8Ay4LAOUpOWp741EwdqPrRY3oZJbfuw9kV8CjJsm22SGD8Q1buStwMngRHgEbAiteF//Vih6x7RtlbFeEsPpDU6H3jjM76AGamMpqjbEqfE9/lpDF4wKhxPE2GBWUCnntKeAJ+BCf19UP9vVsqZykymLiStbA3w3ahM/u5KWN8uYJRoRLMroY0uh89rklQ2E7hqcVCCzwmPemZYVnpRyFju8xlO4pNjZpI2zPTugCmA446KL8dxMEHjQ5fNjlmq29GJ3SoLgP16Xje5ATRGvPZmZP6mU95WYJ7+yPdLlgxQynaE1N+ofTARX/dn0vgpgHbgo8XYJeUOeKOWVHaTTR9IhV8aZUZdgVF3mon42K7yANhkSUgOObSdlifvbLzRCWYg63RoDxm6sTg2st7ebnXoBuOuAi1lJb4EGXDoZOgEGUrTtlgAzw2jSxy6p4auJZ6Fv1ldkKcO3VJD90zlDfDVMDrboZMEJ0iTh40mo+xEyAZNkC9p2hYLMRKzAz6l6IAFRtnxmB3wWRV4CLR62Ggr8hAYShgErdOlo+yVQgZB0k+Dzu2wQLktHtPgwf82DZJdIhS2J7jZMxEyT5zySYTINhX+ruf5Nh3tm/T3K5YnH5UKSxC8nmsqTG0x9KvuFkNkuxzuC9nGLuZymOw3RDo8NkQ6pn1D5D9tiU3oz2OZ6gq1JSbU/aaoqvdt8RQHI2M+q78odMY3PQcjKY7G5DirR463VLqjsd5pPRrL4HBUntwxz8PRxTr/eF2Iw1Gh7o/HPS9IyJSW9QWJgWm9IJHgisz2DK/IbC/EFRlV75ekkgK8NRq23qLZYGjeqbJA7dUM8s96AthnaG6pskBtLg/SH2Pd0aPKArAbfxIdkRcSamsFX1aqMkE9/2BCkJ/BeHTAnT+FKioqKioqVJ78BtJI+y7hPR18AAAAAElFTkSuQmCC"
          ></img>
          <TestoMenu>Settings</TestoMenu>
        </div>
      </GroupMenu>
    </DivMenu>
  )
}

export default MenuLaterale
