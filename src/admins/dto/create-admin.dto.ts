import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsString, IsNotEmpty, IsOptional, IsEnum, IsEmail } from 'class-validator'
import { AdminRole } from '../../shared/acl'

export class CreateAdminProfileDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string
}

export class CreateAdminDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  adminUserId: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  email: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  addedByAdminUserId: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  addedByAdminEmail: string
}

export class CreateAdminRequestDto {
  @ApiProperty({ example: 'hello@emample.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string

  @ApiProperty({ enum: AdminRole })
  @IsNotEmpty()
  @IsEnum(AdminRole)
  adminRole: string

  @ApiPropertyOptional({
    description: 'Optional, needed when admin role is ORGANIZATION_ADMIN_ROLE',
  })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  organizationId: string

  @ApiPropertyOptional({
    description: 'Optional, needed when admin role is PREFECTURE_ADMIN_ROLE',
  })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  prefectureId: string

  // Keys without any decorators are non-Whitelisted. Validator will throw error if it's passed in payload.
  addedByAdminUserId: string
  addedByAdminEmail: string
}
